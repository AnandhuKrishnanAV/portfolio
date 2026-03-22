export type SkillEntry = {
  id: string;
  label: string;
  /** Short line under title in detail panel */
  subtitle: string;
  /** Data analytics vs web dev */
  category: "data" | "web";
  /** Body + project tie-ins */
  body: string[];
  /** Anchor to project section cards */
  relatedProjectTitles?: string[];
};

export const SKILLS: SkillEntry[] = [
  {
    id: "python",
    label: "Python",
    subtitle: "pandas · NumPy · Seaborn · Matplotlib · scikit-learn · TensorFlow",
    category: "data",
    body: [
      "Primary language for analysis, modelling, and dashboard backends — from cleaning and EDA to training classifiers and serving Streamlit apps.",
      "Tanzania water pump project: end-to-end workflow with geospatial EDA, ML, and Streamlit. Remote AI automation tooling is also Python-first.",
    ],
    relatedProjectTitles: [
      "Predictive Analysis of Rural Water Pump Functionality",
      "Remote AI",
    ],
  },
  {
    id: "sql",
    label: "SQL",
    subtitle: "Queries · joins · aggregations · ad-hoc exploration",
    category: "data",
    body: [
      "Used wherever structured data needs filtering, grouping, and validation — from dashboard SQL panels to analytical extracts feeding Python and Excel.",
      "Water pump dashboard included a query interface; analytical work for PathPilot and sales reporting also leans on SQL-style thinking.",
    ],
    relatedProjectTitles: [
      "Predictive Analysis of Rural Water Pump Functionality",
      "PathPilot",
    ],
  },
  {
    id: "excel",
    label: "Excel",
    subtitle: "Pivot tables · slicers · interactive dashboards",
    category: "data",
    body: [
      "Built a full supermarket sales interactive dashboard with slicers, KPIs, and linked charts — a practical stack for stakeholders who live in spreadsheets.",
    ],
    relatedProjectTitles: ["Sales-Interactive-Dashboard"],
  },
  {
    id: "tableau",
    label: "Tableau",
    subtitle: "Dashboards · storytelling · exploratory viz",
    category: "data",
    body: [
      "Part of the analytics toolkit alongside Excel and Power BI — useful for polished, shareable views when the audience expects BI tooling rather than code-first apps.",
    ],
  },
  {
    id: "powerbi",
    label: "Power BI",
    subtitle: "DAX · modelling · business-facing reports",
    category: "data",
    body: [
      "Complements Python and Excel: semantic models, measures, and report packs for decision-makers — aligned with analyst / business analyst workflows.",
    ],
  },
  {
    id: "html",
    label: "HTML",
    subtitle: "Semantic structure · accessibility-aware markup",
    category: "web",
    body: [
      "Foundation for PathPilot and this portfolio: semantic sections, forms, and content structure before styling and behaviour layers.",
    ],
    relatedProjectTitles: ["PathPilot"],
  },
  {
    id: "css",
    label: "CSS",
    subtitle: "Layout · motion · responsive UI",
    category: "web",
    body: [
      "Styling for product surfaces and marketing pages — from layout systems to scroll-driven experiences and dark-theme polish.",
    ],
    relatedProjectTitles: ["PathPilot"],
  },
  {
    id: "javascript",
    label: "JavaScript",
    subtitle: "Browser logic · APIs · interactive UI",
    category: "web",
    body: [
      "Client-side behaviour for modern web apps — form flows, async data, and interactive components alongside HTML/CSS.",
    ],
    relatedProjectTitles: ["PathPilot"],
  },
  {
    id: "bootstrap",
    label: "Bootstrap",
    subtitle: "Rapid layout · components · responsive grid",
    category: "web",
    body: [
      "Utility-first speed for dashboards and marketing pages when delivery time matters; pairs well with Django templates or static stacks.",
    ],
    relatedProjectTitles: ["PathPilot"],
  },
  {
    id: "django",
    label: "Django",
    subtitle: "Python web framework · ORM · auth · APIs",
    category: "web",
    body: [
      "Full-stack Python web: models, admin, REST-style endpoints, and server-rendered or API-backed UIs — natural fit next to data work in the same language.",
    ],
    relatedProjectTitles: ["PathPilot"],
  },
];
