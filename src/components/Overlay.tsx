"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type OverlayProps = {
  scrollYProgress: MotionValue<number>;
};

export function Overlay({ scrollYProgress }: OverlayProps) {
  const yHero = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const opHero = useTransform(scrollYProgress, [0, 0.1, 0.22], [1, 1, 0]);

  const yMid = useTransform(scrollYProgress, [0, 0.5], [40, -90]);
  const opMid = useTransform(scrollYProgress, [0.18, 0.28, 0.38], [0, 1, 0]);

  const yRigor = useTransform(scrollYProgress, [0.35, 0.65], [24, -72]);
  const opRigor = useTransform(scrollYProgress, [0.36, 0.44, 0.52], [0, 1, 0]);

  const yPipeline = useTransform(scrollYProgress, [0.5, 0.85], [32, -64]);
  const opPipeline = useTransform(scrollYProgress, [0.5, 0.58, 0.67], [0, 1, 0]);

  const yStructured = useTransform(scrollYProgress, [0.62, 0.95], [28, -56]);
  const opStructured = useTransform(scrollYProgress, [0.65, 0.73, 0.84], [0, 1, 0]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Hero: name left, role right; vertically centered with offset below navbar */}
      <div className="absolute inset-x-0 top-[calc(50%+2.25rem)] z-[21] flex -translate-y-1/2 justify-center px-[max(0.75rem,env(safe-area-inset-left))] pr-4 sm:top-[calc(50%+2.5rem)] sm:px-6 md:top-[calc(50%+2.75rem)] lg:px-10">
        <motion.div
          style={{ opacity: opHero, y: yHero }}
          className="flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
        >
          <div className="text-left">
            <p className="mb-3 text-left text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--accentColor)]">
              Hello I am
            </p>
            <h1 className="text-left text-2xl font-semibold leading-[1.12] tracking-tight text-[#eae5ec] sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block">Anandhu Krishnan</span>
              <span className="mt-1 block sm:mt-1.5">Anitha Vijayan</span>
            </h1>
          </div>
          <p className="w-full text-right text-base font-semibold uppercase tracking-[0.22em] text-[#eae5ec]/80 sm:mt-0 sm:w-auto sm:self-center sm:text-xl sm:tracking-[0.26em] md:text-2xl md:tracking-[0.28em] lg:text-3xl">
            DATA ANALYST
          </p>
        </motion.div>
      </div>

      {/* Scroll beats: shared left column (matches “From raw data…”), clears fixed resume FAB */}
      <div className="relative z-[19] flex h-full min-h-0 flex-col px-6 pb-[max(6.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-10 sm:pb-10 lg:px-16">
        <div className="relative min-h-0 flex-1">
          <motion.div
            style={{ opacity: opMid, y: yMid }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-[#eae5ec] sm:text-4xl md:text-5xl">
                From raw data to clear insight.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#eae5ec]/50 sm:text-base">
                Dashboards, analysis, and reporting — structured for stakeholders
                who need answers, not noise.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: opRigor, y: yRigor }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-[#eae5ec] sm:text-4xl md:text-5xl">
                Rigor and communication.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#eae5ec]/50 sm:text-base">
                Clean methodology, reproducible workflows, and visuals that make
                the finding impossible to miss.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: opPipeline, y: yPipeline }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-[#eae5ec] sm:text-4xl md:text-5xl">
                I don&apos;t just analyse the problem. I build the solution.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#eae5ec]/50 sm:text-base">
                Data analyst, business strategist, and full stack developer —
                one person, the whole pipeline.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: opStructured, y: yStructured }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-[#eae5ec] sm:text-4xl md:text-5xl">
                Clean code. Clear data. Zero guesswork.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#eae5ec]/50 sm:text-base">
                I turn ambiguous problems into structured systems — from the
                first query to the final product.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
