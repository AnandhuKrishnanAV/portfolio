"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PROJECTS, type ProjectEntry } from "@/data/projects";
import { ProjectCaseModal } from "@/components/ProjectCaseModal";
import { SITE_EMAIL } from "@/config/site";

export function Projects() {
  const [active, setActive] = useState<ProjectEntry | null>(null);

  return (
    <>
      <section
        id="work"
        className="relative z-20 border-t border-white/[0.06] bg-[#050810] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--accentColor)]">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#eae5ec] sm:text-4xl">
                Projects &amp; Case studies
              </h2>
            </div>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="pointer-events-auto inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-[#eae5ec]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition hover:border-[var(--accentColor)]/40 hover:bg-[var(--accentColor)]/[0.08] hover:shadow-[0_0_40px_-12px_rgba(94,234,212,0.35)]"
            >
              Start a project
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-xl transition duration-500 hover:border-white/[0.14] hover:bg-white/[0.05] hover:shadow-[0_0_60px_-20px_rgba(255,255,255,0.12)]"
              >
                {p.thumbnailSrc ? (
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/30">
                    <Image
                      src={p.thumbnailSrc}
                      alt={
                        p.thumbnailAlt?.trim()
                          ? p.thumbnailAlt.trim()
                          : `${p.title} — project thumbnail`
                      }
                      fill
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accentColor)]">
                      {p.tag}
                    </span>
                    <span className="text-xs text-[#eae5ec]/35">{p.year}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#eae5ec] sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#eae5ec]/50">
                    {p.description}
                  </p>

                  {p.caseStudy ? (
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-left text-sm font-medium text-[#eae5ec]/70 transition group-hover:text-[#eae5ec]"
                    >
                      Explore project
                      <span
                        aria-hidden
                        className="translate-x-0 transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </button>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-[#eae5ec]/35">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active?.caseStudy ? (
          <ProjectCaseModal
            key={active.id}
            project={active}
            onClose={() => setActive(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
