"use client";

import { useEffect, useId, useRef, useState } from "react";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import { RESUME_PDF_PATH } from "@/config/site";

function IconDocument() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function FloatingResume() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => {
        dialogRef.current?.focus();
      });
      return () => cancelAnimationFrame(id);
    }
    triggerRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="pointer-events-auto fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[46] flex items-center gap-2 rounded-full border border-[var(--accentColor)]/35 bg-[#050810]/95 px-4 py-2.5 text-sm font-semibold text-[#eae5ec] shadow-[0_0_24px_-8px_rgba(94,234,212,0.35)] backdrop-blur-md transition hover:border-[var(--accentColor)]/55 hover:bg-[var(--accentColor)]/[0.08] hover:text-[var(--accentColor)]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="resume-dialog"
      >
        <IconDocument />
        Resume
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="resume-modal"
            role="presentation"
            className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto p-4 pb-12 pt-[max(2rem,env(safe-area-inset-top))] sm:p-6 sm:pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              tabIndex={-1}
              aria-label="Close resume"
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <FocusTrap
              active
              focusTrapOptions={{
                clickOutsideDeactivates: false,
                escapeDeactivates: false,
                fallbackFocus: () => dialogRef.current ?? undefined,
              }}
            >
              <motion.div
                ref={dialogRef}
                id="resume-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className="relative my-auto w-full max-w-4xl rounded-2xl border border-white/[0.1] bg-[#0a0e17] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_25px_80px_-20px_rgba(0,0,0,0.8)] outline-none"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-6">
                  <h2
                    id={titleId}
                    className="text-sm font-semibold text-[#eae5ec] sm:text-base"
                  >
                    Resume
                  </h2>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#eae5ec] transition hover:bg-white/[0.1]"
                    aria-label="Close"
                  >
                    <span aria-hidden className="text-lg leading-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="relative h-[min(78vh,900px)] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-black/50">
                    <iframe
                      title="Resume PDF"
                      src={RESUME_PDF_PATH}
                      className="h-full w-full rounded-[inherit]"
                    />
                  </div>
                </div>
              </motion.div>
            </FocusTrap>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
