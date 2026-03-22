"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";

export function ScrollySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18],
    [1, 1, 0],
  );

  return (
    <section ref={sectionRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 z-[14] h-screen w-full overflow-hidden bg-[var(--backgroundColor)]">
        <ScrollyCanvas sectionRef={sectionRef} scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 z-[22] -translate-x-1/2"
          style={{ opacity: scrollHintOpacity }}
        >
          <div className="flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#eae5ec]/40">
            <span>Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-[#eae5ec]/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
