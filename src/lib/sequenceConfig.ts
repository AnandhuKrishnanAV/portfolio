/**
 * Next.js only serves static files from the `public/` folder.
 * `/sequence/frame_00_...` in the browser = `public/sequence/frame_00_...` on disk.
 *
 * If you add or replace frames in the repo-root `sequence/` folder, run:
 *   npm run sync-sequence
 * so `public/sequence/` stays in sync (otherwise the site 404s those URLs).
 */
export const SEQUENCE_FRAME_COUNT = 75;

/** Matches your exported files: `frame_00_delay-0.066s.png`. Switch to `.webp` when you add WebP. */
const FRAME_SUFFIX = "_delay-0.066s";
const EXT = "png" as const;

export function sequenceFrameSrc(index: number): string {
  const n = Math.min(
    SEQUENCE_FRAME_COUNT - 1,
    Math.max(0, Math.floor(index)),
  );
  const padded = String(n).padStart(2, "0");
  return `/sequence/frame_${padded}${FRAME_SUFFIX}.${EXT}`;
}

export function allSequenceSrcs(): string[] {
  return Array.from({ length: SEQUENCE_FRAME_COUNT }, (_, i) =>
    sequenceFrameSrc(i),
  );
}
