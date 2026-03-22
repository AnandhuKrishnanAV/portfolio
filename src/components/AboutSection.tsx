export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 border-t border-white/[0.06] bg-[#050810] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accentColor)]">
          About
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-[#eae5ec] sm:text-3xl">
          I turn complex data into clear stories, dashboards, and decisions.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#eae5ec]/55 sm:text-base">
          Background in analysis, visualization, and stakeholder communication —
          from SQL and spreadsheets to polished reporting and narrative.
        </p>
      </div>
    </section>
  );
}
