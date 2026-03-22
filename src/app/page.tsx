import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Projects } from "@/components/Projects";
import { ScrollySection } from "@/components/ScrollySection";
import { FloatingResume } from "@/components/FloatingResume";
import { FloatingSocial } from "@/components/FloatingSocial";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_EMAIL, SOCIAL } from "@/config/site";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050810]">
      <AmbientBackdrop />
      <FloatingSocial />
      <FloatingResume />
      <SiteHeader />
      <ScrollySection />
      <AboutSection />
      <Projects />
      <SkillsSection />
      <footer
        id="contact"
        className="relative z-20 border-t border-white/[0.06] bg-[#050810] px-6 py-14 sm:px-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accentColor)]">
              Contact
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-3 block text-lg font-medium text-[#eae5ec] transition-colors hover:text-[var(--accentColor)] sm:text-xl"
            >
              {SITE_EMAIL}
            </a>
            <p className="mt-4 max-w-md text-sm text-[#eae5ec]/50">
              Open to data analyst and analytics roles — reach out anytime.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold tracking-wide text-[#eae5ec]/70">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accentColor)]"
            >
              GitHub
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accentColor)]"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accentColor)]"
            >
              X
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accentColor)]"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl text-center text-xs text-[#eae5ec]/35">
          © {new Date().getFullYear()} Anandhu Krishnan Anitha Vijayan
        </p>
      </footer>
    </main>
  );
}
