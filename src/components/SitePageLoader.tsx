"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HEADLINE =
  "Data Analyst / Anandhu Krishnan Anitha Vijayan";

const R = 44;
const CIRC = 2 * Math.PI * R;

type SitePageLoaderProps = {
  children: React.ReactNode;
};

export function SitePageLoader({ children }: SitePageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let intervalId: ReturnType<typeof setInterval>;

    const finish = () => {
      if (!mounted) return;
      setProgress(100);
      window.setTimeout(() => {
        if (mounted) setVisible(false);
      }, 480);
    };

    if (document.readyState === "complete") {
      finish();
      return () => {
        mounted = false;
      };
    }

    const t0 = performance.now();
    intervalId = setInterval(() => {
      if (!mounted) return;
      setProgress((p) => {
        if (p >= 92) return p;
        const elapsed = performance.now() - t0;
        const eased = Math.min(92, 8 + elapsed / 120);
        return Math.min(eased, p + 1.2 + Math.random() * 0.8);
      });
    }, 48);

    const onLoad = () => {
      clearInterval(intervalId);
      finish();
    };

    window.addEventListener("load", onLoad);

    return () => {
      mounted = false;
      clearInterval(intervalId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <>
      <AnimatePresence mode="wait">
        {visible ? (
          <motion.div
            key="site-loader"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Loading site"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto fixed inset-0 z-[99999] flex flex-col"
          >
            {/* Background — matches portfolio (body + accent orbs) */}
            <div
              className="absolute inset-0 bg-[#050810]"
              aria-hidden
            />
            <div
              className="absolute left-[-10%] top-[-15%] h-[min(55vh,420px)] w-[min(55vh,420px)] rounded-full bg-cyan-500/25 blur-[100px]"
              aria-hidden
            />
            <div
              className="absolute bottom-[-20%] right-[-15%] h-[min(50vh,380px)] w-[min(50vh,380px)] rounded-full bg-[var(--accentColor)]/20 blur-[110px]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(10,14,23,0.2)_0%,#050810_75%)]"
              aria-hidden
            />

            {/* Running headline — full width, vertically centered band */}
            <div className="relative z-[1] flex min-h-0 w-full flex-1 items-center justify-center px-0">
              <div className="w-full overflow-hidden py-6 sm:py-10">
                <div className="flex w-[200%] motion-safe:animate-loader-marquee motion-reduce:animate-none">
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="flex w-1/2 shrink-0 items-center justify-center px-3 sm:px-6"
                    >
                      <p className="w-full text-center text-[clamp(1.125rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-[#eae5ec]/[0.88]">
                        {HEADLINE}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress control — centered, overlaps headline */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
              <div className="pointer-events-auto flex h-[min(7.5rem,28vw)] w-[min(7.5rem,28vw)] min-h-[5.5rem] min-w-[5.5rem] items-center justify-center rounded-full border border-white/[0.12] bg-[#0a0e17]/95 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_12px_48px_-12px_rgba(0,0,0,0.85),0_0_80px_-24px_rgba(94,234,212,0.35)] backdrop-blur-md sm:h-32 sm:w-32">
                <svg
                  className="absolute inset-[6%] -rotate-90 text-[var(--accentColor)]"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - progress / 100)}
                  />
                </svg>
                <span className="relative z-[1] text-xl font-semibold tabular-nums tracking-tight text-[#eae5ec] sm:text-2xl">
                  {Math.min(100, Math.round(progress))}
                  <span className="text-base text-[#eae5ec]/70 sm:text-lg">%</span>
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}
