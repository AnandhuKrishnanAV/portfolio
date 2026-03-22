"use client";

import { useEffect, useId, useRef } from "react";
import FocusTrap from "focus-trap-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectEntry } from "@/data/projects";

type ProjectCaseModalProps = {
  project: ProjectEntry;
  onClose: () => void;
};

export function ProjectCaseModal({ project, onClose }: ProjectCaseModalProps) {
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const cs = project.caseStudy;

  useEffect(() => {
    if (!cs) return;
    closeBtnRef.current?.focus();
  }, [cs]);

  useEffect(() => {
    if (!cs) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [cs]);

  useEffect(() => {
    if (!cs) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, cs]);

  if (!cs) {
    return null;
  }

  return (
    <motion.div
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
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <FocusTrap
        active
        focusTrapOptions={{
          clickOutsideDeactivates: false,
          escapeDeactivates: false,
          initialFocus: () => {
            const el = closeBtnRef.current ?? dialogRef.current;
            return el ?? false;
          },
          fallbackFocus: () => dialogRef.current ?? document.body,
        }}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="relative my-auto w-full max-w-3xl rounded-2xl border border-white/[0.1] bg-[#0a0e17] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_25px_80px_-20px_rgba(0,0,0,0.8)] outline-none"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#eae5ec] transition hover:bg-white/[0.1]"
            aria-label="Close"
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </button>

          <div className="max-h-[min(85vh,880px)] overflow-y-auto px-6 pb-8 pt-10 sm:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accentColor)]">
              {project.tag} · {project.year}
            </p>
            <h2
              id={titleId}
              className="mt-2 text-2xl font-semibold tracking-tight text-[#eae5ec] sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#eae5ec]/70">{cs.intro}</p>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[#eae5ec]/80">
              {cs.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {cs.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--accentColor)]/40 bg-[var(--accentColor)]/[0.12] px-5 py-2.5 text-center text-sm font-medium text-[var(--accentColor)] transition hover:bg-[var(--accentColor)]/[0.2]"
                >
                  {link.label}
                  <span aria-hidden className="ml-2 shrink-0">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 space-y-10 border-t border-white/[0.08] pt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#eae5ec]/45">
                Screenshots
              </p>
              {cs.gallery.map((item) => (
                <figure key={item.src} className="space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.08] bg-black/40">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                  <figcaption className="text-xs leading-relaxed text-[#eae5ec]/55">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.div>
      </FocusTrap>
    </motion.div>
  );
}
