"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ARCH_SKILLS, type Skill } from "@/data/skillsArcData";

const ASPECT_W = 200;
const ASPECT_H = 115;
/** Same center as the SVG `<path>` arcs below (see `A 90 90` / `A 68 68`). */
const ARC_CX_VB = 100;
const ARC_CY_VB = ASPECT_H;
const SVG_R_OUTER = 90;
const SVG_R_INNER = 68;
/** Icon radius in viewBox units — midpoint between inner & outer SVG arcs. */
const R_ICON_VB = (SVG_R_OUTER + SVG_R_INNER) / 2;
/**
 * Angular span along the circle: `Math.PI` = upper semicircle only (matches the dome).
 * Set to `2 * Math.PI` for a full 360° orbit (icons also appear below the baseline).
 */
const ARC_SPAN_RAD = Math.PI;
const SPRING = { type: "spring" as const, stiffness: 400, damping: 20 };

function arcLayout(index: number, n: number) {
  const t = n <= 1 ? 0.5 : index / (n - 1);
  /** θ from π → π−span: left → … → right for `Math.PI` (upper arc). */
  const θ = Math.PI - ARC_SPAN_RAD * t;
  const xVb = ARC_CX_VB + R_ICON_VB * Math.cos(θ);
  const yVb = ARC_CY_VB - R_ICON_VB * Math.sin(θ);
  const left = (xVb / ASPECT_W) * 100;
  const top = (yVb / ASPECT_H) * 100;
  const tiltDeg = (θ * 180) / Math.PI - 90;
  return { left, top, tiltDeg, θ };
}

function iconTone(skill: Skill) {
  return skill.id === "javascript" ? "text-black" : "text-white";
}

const DEFAULT_CENTER_SKILL =
  ARCH_SKILLS.find((s) => s.id === "css3") ?? ARCH_SKILLS[0]!;

function SkillCenterPanel({
  skill,
  initialEnter = true,
}: {
  skill: Skill;
  initialEnter?: boolean;
}) {
  const Icon = skill.Icon;
  return (
    <motion.div
      initial={initialEnter ? { opacity: 0, scale: 0.7 } : false}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={SPRING}
      className="flex max-h-[min(38vh,300px)] w-full max-w-md flex-col items-center overflow-y-auto overscroll-contain rounded-2xl border border-white/[0.07] bg-[#0a0a0f]/85 px-4 py-4 text-center shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:max-h-[min(42vh,340px)] sm:px-5 sm:py-5"
    >
      <div
        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/10 sm:h-[80px] sm:w-[80px]"
        style={{
          backgroundColor: `${skill.bgColor}cc`,
          boxShadow: `0 0 80px -10px ${skill.color}88, inset 0 0 0 1px rgba(255,255,255,0.08)`,
        }}
      >
        <Icon className={`h-12 w-12 sm:h-14 sm:w-14 ${iconTone(skill)}`} />
      </div>
      <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">{skill.name}</h3>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-blue-400/90 sm:text-[11px]">
        {skill.description}
      </p>
      <p className="mt-3 text-left text-sm leading-relaxed text-white/55 sm:mt-4">
        {skill.projects}
      </p>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const n = ARCH_SKILLS.length;

  const positions = useMemo(
    () => ARCH_SKILLS.map((_, i) => arcLayout(i, n)),
    [n],
  );

  const active = ARCH_SKILLS.find((s) => s.id === activeId) ?? null;

  return (
    <section
      id="skills"
      className="relative z-20 w-full overflow-x-hidden border-t border-white/[0.06] bg-[#0a0a0f] px-4 py-12 sm:px-8 sm:py-14 lg:px-12"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[min(70vh,640px)] w-[min(100%,920px)] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-blue-400/70 sm:text-[11px] sm:tracking-[0.4em]">
          Technical Arsenal
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-white sm:mt-2.5 sm:text-3xl md:text-4xl">
          Skills &amp;{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <div
          className="relative mx-auto mt-8 w-full max-w-[min(960px,100%)] origin-top scale-[0.9] sm:mt-9 sm:scale-[0.93] md:scale-95"
          style={{ aspectRatio: `${ASPECT_W} / ${ASPECT_H}` }}
        >
          {/* SVG dome — two concentric strokes ~10–12% white */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${ASPECT_W} ${ASPECT_H}`}
            preserveAspectRatio="xMidYMax meet"
            aria-hidden
          >
            <path
              d={`M 10 ${ASPECT_H} A 90 90 0 0 1 ${ASPECT_W - 10} ${ASPECT_H}`}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={0.75}
              vectorEffect="nonScalingStroke"
            />
            <path
              d={`M 32 ${ASPECT_H} A 68 68 0 0 1 ${ASPECT_W - 32} ${ASPECT_H}`}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={0.75}
              vectorEffect="nonScalingStroke"
            />
          </svg>

          {/* Orbiting badges */}
          <LayoutGroup id="skills-arc">
            {ARCH_SKILLS.map((skill, i) => {
              const { left, top, tiltDeg } = positions[i]!;
              const isActive = activeId === skill.id;
              const isHover = hoverId === skill.id;
              const Icon = skill.Icon;
              const glow =
                isActive || isHover
                  ? `0 0 0 1px ${skill.color}40, 0 0 24px ${skill.color}55`
                  : undefined;

              return (
                <div
                  key={skill.id}
                  className="absolute z-[12]"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: `translate(-50%, -50%) rotate(${tiltDeg}deg)`,
                  }}
                >
                  <div
                    className="relative flex flex-col items-center overflow-visible"
                    style={{ transform: `rotate(${-tiltDeg}deg)` }}
                  >
                    <motion.button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={skill.name}
                      onClick={() =>
                        setActiveId((id) => (id === skill.id ? null : skill.id))
                      }
                      onMouseEnter={() => setHoverId(skill.id)}
                      onMouseLeave={() => setHoverId(null)}
                      className="relative flex h-[52px] w-[52px] items-center justify-center rounded-lg shadow-lg outline-none ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-blue-400"
                      style={{
                        backgroundColor: skill.bgColor,
                        boxShadow: glow,
                      }}
                      initial={false}
                      animate={{ scale: isActive ? 1.25 : 1 }}
                      whileHover={{ scale: isActive ? 1.25 : 1.15 }}
                      whileTap={{ scale: 0.98 }}
                      transition={SPRING}
                    >
                      <Icon className={`h-7 w-7 ${iconTone(skill)}`} />
                    </motion.button>

                    {/* Tooltip */}
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isHover && !isActive ? 1 : 0,
                        y: isHover && !isActive ? 0 : 4,
                      }}
                      transition={{ duration: 0.15 }}
                      className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded bg-black/80 px-2 py-1 font-mono text-[10px] text-white/90 ring-1 ring-white/10"
                    >
                      {skill.name}
                    </motion.span>

                    {/* Active indicator dot — layoutId slides between icons */}
                    {isActive ? (
                      <motion.span
                        layoutId="skill-active-dot"
                        className="absolute -bottom-3 h-2 w-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        transition={SPRING}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </LayoutGroup>

          {/* Inner semicircle — CSS3 preview by default, selected skill when active; bottom-weighted */}
          <div
            className="pointer-events-none absolute inset-x-4 bottom-[2%] top-[30%] z-[8] flex items-end justify-center pb-3 sm:inset-x-10 sm:bottom-[3%] sm:top-[31%] sm:pb-5 md:top-[32%]"
          >
            <div className="pointer-events-auto w-full max-w-md px-2">
              <AnimatePresence mode="wait">
                {active ? (
                  <SkillCenterPanel key={active.id} skill={active} />
                ) : (
                  <SkillCenterPanel
                    key="idle-css3-preview"
                    skill={DEFAULT_CENTER_SKILL}
                    initialEnter={false}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
