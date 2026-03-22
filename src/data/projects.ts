export type CaseStudyGalleryItem = {
  src: string;
  caption: string;
};

export type CaseStudyLink = {
  label: string;
  href: string;
};

export type ProjectCaseStudy = {
  intro: string;
  highlights: string[];
  gallery: CaseStudyGalleryItem[];
  /** Outbound links — live app, slides, articles, etc. */
  links: CaseStudyLink[];
};

export type ProjectEntry = {
  id: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  /** Card preview — optional until provided for each project */
  thumbnailSrc?: string;
  thumbnailAlt: string;
  caseStudy?: ProjectCaseStudy;
};

export const PROJECTS: ProjectEntry[] = [
  {
    id: "pathpilot",
    title: "PathPilot",
    tag: "Project / Full Stack",
    year: "2026",
    description:
      "AI-Powered Job Market Analytics Platform — an end-to-end ML-driven application that ingests unstructured job data, applies NLP and LLM techniques, and produces structured decision outputs.",
    thumbnailSrc: "/projects/pathpilot/landing.png",
    thumbnailAlt: "PathPilot landing page with job search hero",
    caseStudy: {
      intro:
        "PathPilot is a full-stack career platform that combines job discovery, assisted applications, resume tooling, and AI career guidance. The product surfaces structured insights from noisy job-market data and pairs them with conversational AI (Kyro) so users can plan next steps with confidence.",
      highlights: [
        "Job finder with keyword and location search tuned for real-world discovery flows",
        "Tiered pricing (Explorer, Pro, Career Accelerator) with clear feature gating",
        "Resume builder with scoring, templates, and AI-assisted suggestions",
        "Career Guidance via Kyro — LLM-powered chat, suggested prompts, and voice-ready UX",
        "Authenticated experience with sign-in and dashboard-style navigation",
      ],
      links: [
        {
          label: "Visit live site",
          href: "https://pathpilot-alpha-nine.vercel.app/",
        },
      ],
      gallery: [
        {
          src: "/projects/pathpilot/landing.png",
          caption:
            "Landing — hero, search, and feature cards (Job Finder, Assisted Apply, Resume Builder, Career Guidance).",
        },
        {
          src: "/projects/pathpilot/pricing.png",
          caption:
            "Pricing — Explorer, PathPilot Pro, and Career Accelerator plans in EUR.",
        },
        {
          src: "/projects/pathpilot/resume-builder.png",
          caption:
            "Resume Builder — sectioned editor, resume score, templates, and AI tips.",
        },
        {
          src: "/projects/pathpilot/career-guidance.png",
          caption:
            "Career Guidance — Kyro AI assistant with prompts, chat, and sidebar feature list.",
        },
        {
          src: "/projects/pathpilot/sign-in.png",
          caption:
            "Sign in — split layout, OAuth options, and employer portal entry.",
        },
      ],
    },
  },
  {
    id: "remote-ai",
    title: "Remote AI",
    tag: "AI / Automation",
    year: "2026",
    description:
      "A locally installable AI assistant that automates tasks on your machine — powered by Ollama, Mistral, and MCP.",
    thumbnailSrc: "/projects/remote-ai/hero.png",
    thumbnailAlt:
      "Remote AI branding — Intelligent Automation, Anywhere; powered by Ollama and Mistral AI",
    caseStudy: {
      intro:
        "Remote AI is built to run on your laptop as a local automation layer: you install it once, then it can orchestrate work using an LLM stack you control. The project combines Ollama for running models locally, Mistral AI as the reasoning backbone, and MCP (Model Context Protocol) to connect the agent to tools and repeatable automation flows — so tasks can be executed end-to-end without shipping data to a black-box cloud if you do not want to.",
      highlights: [
        "Local-first workflow — designed to be installed and run on your own machine (see repository README and main entrypoint).",
        "Ollama integration for local model serving and fast iteration on open models.",
        "Mistral AI used as part of the language-model pipeline for capable, structured responses.",
        "MCP-based automation — wire tools and context so the agent can act beyond a single chat turn.",
        "Open source on GitHub — Python-heavy codebase with a clear workspace layout for experimentation.",
      ],
      links: [
        {
          label: "View on GitHub",
          href: "https://github.com/AnandhuKrishnanAV/Remote-Ai",
        },
      ],
      gallery: [
        {
          src: "/projects/remote-ai/hero.png",
          caption:
            "Remote AI — “Intelligent Automation, Anywhere.” Brand visual: local AI assistant concept, powered by Ollama & Mistral AI.",
        },
      ],
    },
  },
  {
    id: "water-pump",
    title: "Predictive Analysis of Rural Water Pump Functionality",
    tag: "Data Science / ML",
    year: "2025",
    description:
      "Analyzing Tanzania's Water Pump Systems Through ML and Interactive Dashboards",
    thumbnailSrc: "/projects/water-pump/presentation.png",
    thumbnailAlt:
      "Project presentation — Tanzania water pump analysis overview",
    caseStudy: {
      intro:
        "A complete end-to-end Data Science workflow built around the Tanzania Water Pump dataset. From EDA → Geospatial Mapping → Machine Learning → Streamlit Dashboard → Presentation, this project has been a great learning experience.",
      highlights: [
        "Project highlight: I developed an interactive Streamlit dashboard that visualizes pump locations, status, geospatial patterns, and key metrics — helping identify areas where water infrastructure needs the most attention.",
        "Machine learning: Using a simple but effective model with 8 key features (pump age, extraction type, basin, payment type, and related signals), the model achieved ~0.75 accuracy on training data and ~0.73 on unseen data — a good balance between simplicity and generalization.",
      ],
      links: [
        {
          label: "View presentation (Google Slides)",
          href: "https://docs.google.com/presentation/d/1IWpjO_I996Cdpv813FHaHxBsstQYBkFA9XXdX40GZa0/edit?usp=sharing",
        },
        {
          label: "Streamlit dashboard walkthrough (LinkedIn)",
          href: "https://www.linkedin.com/posts/anandhu-krishnan-av_dataanalysis-streamlit-python-activity-7398409469879078912-PVI0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLbdIwB4UGmi-zmeFHLEjkoMTRrBdwry5o",
        },
      ],
      gallery: [
        {
          src: "/projects/water-pump/presentation.png",
          caption:
            "Presentation — final deck covering methodology, EDA, modeling, and dashboard overview.",
        },
        {
          src: "/projects/water-pump/streamlit-dashboard.png",
          caption:
            "Streamlit dashboard — filters, KPIs (functional / non-functional / needs repair), and Pydeck map of pump locations in Tanzania.",
        },
      ],
    },
  },
  {
    id: "sales-interactive-dashboard",
    title: "Sales-Interactive-Dashboard",
    tag: "Excel / BI",
    year: "2024",
    description:
      "Created a sales interactive dashboard in Excel using supermarket sales data — filters, KPIs, and charts for products, cities, payments, and trends.",
    thumbnailSrc: "/projects/sales-dashboard/dashboard.png",
    thumbnailAlt:
      "Excel Sales Interactive Dashboard — slicers and supermarket sales visuals",
    caseStudy: {
      intro:
        "This project is a full Excel-based reporting surface built on supermarket sales records. Interactive slicers drive every chart so stakeholders can slice by city (e.g. Mandalay, Naypyitaw, Yangon), product line, payment type, and time — making ad-hoc exploration possible without leaving the workbook. The layout mirrors a classic BI dashboard: filters across the top, then a grid of complementary visuals so ratings, revenue, payments, and trends stay in one glanceable view.",
      highlights: [
        "Deliverable — average rating by product line (bar chart) to compare perceived quality across categories.",
        "Deliverable — top selling products by city (segmented horizontal bars) to see regional demand.",
        "Deliverable — revenue generated by city (pie / share view) to compare market contribution.",
        "Deliverable — payment mix: which methods appear most often (Ewallet, Cash, Credit card).",
        "Deliverable — gross income by product category (ranked bars) to spotlight highest-yield lines.",
        "Deliverable — sales trend over time (line chart) to surface seasonality and daily volatility.",
        "UX — slicers for city, product line, payment, and a date timeline so the whole board updates together.",
      ],
      links: [
        {
          label: "View on GitHub",
          href: "https://github.com/AnandhuKrishnanAV/Sales-Interactive-DashBoard",
        },
      ],
      gallery: [
        {
          src: "/projects/sales-dashboard/dashboard.png",
          caption:
            "Sales Interactive Dashboard — Excel workbook with slicers (city, product line, payment, date) and charts for ratings, revenue, payments, gross income, and sales trend.",
        },
      ],
    },
  },
];
