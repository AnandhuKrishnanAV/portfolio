"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { drawImageCover } from "@/lib/canvasCover";
import { SEQUENCE_FRAME_COUNT, allSequenceSrcs } from "@/lib/sequenceConfig";
import { BACKGROUND_COLOR, validateBackgroundColorMatchesCSS } from "@/lib/theme";

type ScrollyCanvasProps = {
  scrollYProgress: MotionValue<number>;
};

export function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [preloadState, setPreloadState] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const img = imagesRef.current[index];
    if (!img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const rect = wrap.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2);

    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, w, h);
    drawImageCover(ctx, img, 0, 0, w, h);
  }, []);

  const scheduleDraw = useCallback(
    (index: number) => {
      frameRef.current = index;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        drawFrame(frameRef.current);
      });
    },
    [drawFrame],
  );

  useEffect(() => {
    setPreloadState("loading");
    const srcs = allSequenceSrcs();
    const images: HTMLImageElement[] = srcs.map((src) => {
      const im = new Image();
      im.decoding = "async";
      im.src = src;
      return im;
    });
    imagesRef.current = images;

    let cancelled = false;
    let settled = 0;

    const finishOne = () => {
      if (cancelled) return;
      settled += 1;
      if (settled >= images.length) {
        const anyDrawable = images.some((im) => im.complete && im.naturalWidth > 0);
        setPreloadState(anyDrawable ? "ready" : "error");
        if (anyDrawable) scheduleDraw(frameRef.current);
      }
    };

    images.forEach((im) => {
      if (im.complete) {
        finishOne();
      } else {
        im.addEventListener("load", finishOne, { once: true });
        im.addEventListener("error", finishOne, { once: true });
      }
    });

    return () => {
      cancelled = true;
      images.forEach((im) => {
        im.removeEventListener("load", finishOne);
        im.removeEventListener("error", finishOne);
      });
    };
  }, [scheduleDraw]);

  useEffect(() => {
    validateBackgroundColorMatchesCSS();
  }, []);

  useEffect(() => {
    if (preloadState !== "ready") return;
    const p = scrollYProgress.get();
    const last = SEQUENCE_FRAME_COUNT - 1;
    const idx = Math.round(Math.min(1, Math.max(0, p)) * last);
    scheduleDraw(idx);
  }, [preloadState, scheduleDraw, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const last = SEQUENCE_FRAME_COUNT - 1;
    const idx = Math.round(Math.min(1, Math.max(0, p)) * last);
    scheduleDraw(idx);
  });

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ro = new ResizeObserver(() => {
      const p = scrollYProgress.get();
      const last = SEQUENCE_FRAME_COUNT - 1;
      const idx = Math.round(Math.min(1, Math.max(0, p)) * last);
      scheduleDraw(idx);
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [scheduleDraw, scrollYProgress]);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 z-0 h-full w-full bg-[var(--backgroundColor)]"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="relative z-0 block h-full w-full"
        role="img"
        aria-label="Scroll-driven sequence"
      />
      {preloadState === "loading" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--backgroundColor)]">
          <div className="h-px w-24 overflow-hidden bg-white/10">
            <div className="h-full w-1/2 animate-pulse bg-white/40" />
          </div>
        </div>
      )}
      {preloadState === "error" && (
        <p className="absolute bottom-8 left-1/2 z-[1] max-w-md -translate-x-1/2 px-4 text-center text-xs text-white/50">
          Could not load sequence frames. Ensure files exist at{" "}
          <code className="text-white/70">public/sequence/</code> and run{" "}
          <code className="text-white/70">npm run sync-sequence</code> after
          updating the repo <code className="text-white/70">sequence/</code>{" "}
          folder.
        </p>
      )}
    </div>
  );
}
