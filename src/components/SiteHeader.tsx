import Link from "next/link";
import { HoverLinks } from "@/components/HoverLinks";
import { SITE_EMAIL } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[9999]">
      <div
        className="pointer-events-auto relative mx-auto box-border flex w-[var(--cWidth)] max-w-[var(--cMaxWidth)] items-center justify-between gap-4 pt-[max(20px,env(safe-area-inset-top))]"
        style={{ paddingBottom: "20px" }}
      >
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6 lg:gap-10">
          <Link
            href="/#"
            className="navbar-title shrink-0 font-bold text-sm tracking-wide text-[#eae5ec] sm:text-base lg:text-lg"
          >
            AK
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="hidden min-h-[44px] min-w-0 items-center truncate text-[13px] font-medium tracking-wide text-[#eae5ec] transition-colors hover:text-[var(--accentColor)] min-[900px]:flex lg:text-[15px]"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav className="shrink-0">
          <ul className="m-0 flex list-none flex-col items-end gap-2 p-0 text-xs font-semibold tracking-wide text-[#ccc] min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-10 min-[500px]:text-sm lg:gap-20 lg:text-base min-[500px]:text-[#eae5ec]">
            <li>
              <a href="#about" className="transition-colors hover:text-[var(--accentColor)]">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a href="#skills" className="transition-colors hover:text-[var(--accentColor)]">
                <HoverLinks text="SKILLS" />
              </a>
            </li>
            <li>
              <a href="#work" className="transition-colors hover:text-[var(--accentColor)]">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-[var(--accentColor)]">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
