import type { ComponentType, SVGProps } from "react";
import {
  IconBootstrap,
  IconCss3,
  IconDjango,
  IconExcel,
  IconFramer,
  IconHtml5,
  IconJavaScript,
  IconMongoDb,
  IconNextJs,
  IconNodeJs,
  IconPowerBi,
  IconPython,
  IconReact,
  IconSql,
  IconTableau,
  IconTailwind,
  IconTypeScript,
} from "@/components/skills/skillIcons";

export type Skill = {
  id: string;
  name: string;
  /** Brand accent for glow / ring */
  color: string;
  /** Badge background */
  bgColor: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Short monospace-style descriptor */
  description: string;
  /** 2–3 sentence project summary */
  projects: string;
};

export const ARCH_SKILLS: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    color: "#ffffff",
    bgColor: "#000000",
    Icon: IconNextJs,
    description: "React framework · SSR & static generation",
    projects:
      "This portfolio is built with the Next.js App Router — static generation, image optimization, and a single deployable surface. The same stack supports production-grade routing and SEO-friendly structure for case-study pages.",
  },
  {
    id: "react",
    name: "React",
    color: "#61dafb",
    bgColor: "#20232a",
    Icon: IconReact,
    description: "Component-based UI library",
    projects:
      "PathPilot and this site use React for composable UI: modals, scroll-driven sections, and client-side state for project exploration. Hooks and a component model keep complex flows maintainable.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    color: "#3178c6",
    bgColor: "#1d1d1f",
    Icon: IconTypeScript,
    description: "Typed JavaScript at scale",
    projects:
      "Project data, props for case-study modals, and canvas helpers are typed end-to-end so refactors stay safe. TypeScript pairs with React and Next for predictable builds in CI.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    color: "#38bdf8",
    bgColor: "#0f172a",
    Icon: IconTailwind,
    description: "Utility-first styling",
    projects:
      "Layout, spacing, and dark-theme polish across the portfolio use Tailwind for rapid iteration without leaving the JSX. Responsive breakpoints align hero, projects grid, and skills arc on all viewports.",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    color: "#ff0055",
    bgColor: "#111118",
    Icon: IconFramer,
    description: "Production motion for React",
    projects:
      "Scroll-linked storytelling, modal enter/exit, and the skills interactions use Framer Motion springs and layout animations so transitions feel physical and accessible when reduced motion is off.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    color: "#3c873a",
    bgColor: "#0d260d",
    Icon: IconNodeJs,
    description: "JavaScript runtime on the server",
    projects:
      "Full-stack and tooling contexts — from local automation in Remote AI to ecosystem alignment with modern web backends. Node keeps one language across scripts, APIs, and deployment pipelines.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    color: "#47a248",
    bgColor: "#0f1f12",
    Icon: IconMongoDb,
    description: "Document data store",
    projects:
      "Where projects use flexible document models for job listings, user content, or analytics payloads, MongoDB-style thinking complements SQL for rapid iteration and JSON-native workflows.",
  },
  {
    id: "html5",
    name: "HTML5",
    color: "#e34f26",
    bgColor: "#2a1210",
    Icon: IconHtml5,
    description: "Semantic structure & accessibility",
    projects:
      "PathPilot and this portfolio lean on semantic sections, landmarks, and dialog patterns so screen readers and keyboard users get a coherent experience alongside Tailwind styling.",
  },
  {
    id: "css3",
    name: "CSS3",
    color: "#1572b6",
    bgColor: "#0c1e2e",
    Icon: IconCss3,
    description: "Layout, motion & responsive UI",
    projects:
      "From grid layouts to reduced-motion media queries and cinematic backgrounds, CSS ties the visual system together — including canvas letterboxing and global theme tokens.",
  },
  {
    id: "python",
    name: "Python",
    color: "#ffd43b",
    bgColor: "#306998",
    Icon: IconPython,
    description: "pandas · ML · Streamlit · automation",
    projects:
      "Primary language for the Tanzania water-pump project: EDA, geospatial work, classifiers, and a Streamlit dashboard. Remote AI is also Python-first for local LLM and automation tooling.",
  },
  {
    id: "powerbi",
    name: "Power BI",
    color: "#f2c811",
    bgColor: "#1a1204",
    Icon: IconPowerBi,
    description: "DAX · models · stakeholder reports",
    projects:
      "Complements Python and Excel for business-facing visuals: semantic models, measures, and report packs aligned with analyst and business-analyst workflows alongside code-first apps.",
  },
  {
    id: "tableau",
    name: "Tableau",
    color: "#e9762d",
    bgColor: "#261208",
    Icon: IconTableau,
    description: "Dashboards & exploratory viz",
    projects:
      "Part of the analytics toolkit with Excel and Power BI — polished, shareable views when stakeholders expect BI tooling rather than Streamlit or notebook-only delivery.",
  },
  {
    id: "excel",
    name: "Excel",
    color: "#217346",
    bgColor: "#0d1f16",
    Icon: IconExcel,
    description: "Pivot tables · slicers · dashboards",
    projects:
      "Built a full supermarket sales interactive dashboard with slicers, KPIs, and linked charts so stakeholders can explore filters, cities, and payment mix without leaving the workbook.",
  },
  {
    id: "sql",
    name: "SQL",
    color: "#89cff0",
    bgColor: "#1a2a35",
    Icon: IconSql,
    description: "Queries · joins · analytical extracts",
    projects:
      "Used wherever structured data needs filtering and validation — from dashboard SQL panels to extracts feeding Python. The water-pump work included query-style exploration; PathPilot leans on relational thinking for job data.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#f7df1e",
    bgColor: "#323330",
    Icon: IconJavaScript,
    description: "Browser logic · APIs · interactive UI",
    projects:
      "Client-side behaviour for PathPilot and this portfolio — async flows, modals, and interactive components next to HTML/CSS. Shared language with Node for end-to-end fluency.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    color: "#7952b3",
    bgColor: "#1f1528",
    Icon: IconBootstrap,
    description: "Rapid layout · components · grid",
    projects:
      "Utility and component speed for dashboards and marketing surfaces when delivery time matters; pairs naturally with Django templates or static stacks in full-stack delivery.",
  },
  {
    id: "django",
    name: "Django",
    color: "#44b78b",
    bgColor: "#092e20",
    Icon: IconDjango,
    description: "Python web framework · ORM · APIs",
    projects:
      "Full-stack Python: models, admin, and server-rendered or API-backed UIs — a natural fit beside data work in the same language, e.g. PathPilot-style product surfaces.",
  },
];
