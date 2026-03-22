/** Must match `--backgroundColor` in `globals.css` (canvas letterbox + fills). */
export const BACKGROUND_COLOR = "#0a0e17";

/**
 * Client-only: warns if JS constant drifts from `:root { --backgroundColor }`.
 */
export function validateBackgroundColorMatchesCSS(): void {
  if (typeof window === "undefined") return;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--backgroundColor")
    .trim();
  if (!raw) {
    console.warn(
      "[theme] --backgroundColor is missing; expected it to match BACKGROUND_COLOR.",
    );
    return;
  }
  const a = raw.toLowerCase();
  const b = BACKGROUND_COLOR.toLowerCase();
  if (a !== b) {
    console.warn(
      `[theme] BACKGROUND_COLOR (${BACKGROUND_COLOR}) does not match --backgroundColor (${raw}). Update src/lib/theme.ts or globals.css :root.`,
    );
  }
}
