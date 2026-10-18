// Edit everything about the portfolio here. Leave a link as "" to hide it / show a placeholder.

export const profile = {
  name: "Monisha K",
  role: "B.E. Computer Science and Engineering",
  college: "Chennai Institute of Technology",
  location: "Chennai, India",
  tagline:
    "I build thoughtful digital experiences and intelligent applications that solve real problems.",
  rotating: ["Developer.", "Problem Solver.", "AI Builder.", "Future Software Engineer."],
  links: {
    github: "https://github.com/monishakrishnamoorthy7",
    linkedin: "https://www.linkedin.com/in/themonisha/",
    email: "", // e.g. "you@example.com"
    resume: "", // e.g. "/resume.pdf" (place the file in /public)
    leetcode: "",
  },
};

export const about = [
  { k: "Now", t: "Third-year CSE student", d: "Studying Computer Science and Engineering at Chennai Institute of Technology." },
  { k: "Building", t: "Full-stack & AI products", d: "Exploring how modern web stacks and LLMs combine into practical, useful tools." },
  { k: "Mindset", t: "Problem-first", d: "I start from a real problem, then pick the simplest technology that solves it well." },
  { k: "Next", t: "Internships & placements", d: "Looking for software engineering roles where I can learn fast and ship real work." },
];

export const snapshot = [
  { label: "Education", value: "B.E. CSE" },
  { label: "College", value: "Chennai Institute of Technology" },
  { label: "Current focus", value: "Full-Stack Development & AI" },
  { label: "Career goal", value: "SWE Internships & Placements" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  status: "Planned" | "In Progress" | "Completed";
  accent: string; // CSS color var
  concept: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  caseStudy: string;
};

export const projects: Project[] = [
  {
    id: "documind",
    name: "DocuMind",
    category: "AI / Full-Stack Development",
    status: "In Progress",
    accent: "var(--violet)",
    concept:
      "An intelligent document assistant: upload PDFs or scanned documents, ask questions in Tamil or English, and extract structured information with source-grounded answers.",
    problem: "Information locked in long PDFs and scans is slow to search, especially across languages.",
    solution: "OCR + semantic retrieval + an LLM that answers only from your documents, with citations.",
    architecture: ["Upload & OCR", "Chunk & embed", "Vector search", "LLM answer + citations"],
    features: [
      "PDF upload and document validation",
      "OCR for scanned documents",
      "Semantic search with RAG",
      "Answers with document citations",
      "Tamil and English Q&A",
      "Secure auth and document access control",
      "Evaluation: retrieval quality, answer correctness, extraction precision/recall",
    ],
    stack: ["React", "TypeScript", "Python", "OCR", "Embeddings", "Vector DB", "LLM API"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "preppilot",
    name: "PrepPilot",
    category: "AI / Career Technology",
    status: "Planned",
    accent: "var(--cyan)",
    concept:
      "An AI-powered interview and skills coach that helps students prepare for technical interviews and identify skill gaps.",
    problem: "Students rarely get structured, personalised interview practice and honest feedback.",
    solution: "Parse the resume, generate tailored questions, and score answers against clear rubrics.",
    architecture: ["Resume parsing", "Question generation", "Mock interview", "Rubric feedback"],
    features: [
      "Resume parsing and skill extraction",
      "Personalised interview questions",
      "Text mock interviews (voice later)",
      "Rubric-based answer feedback",
      "Skill-gap analysis & practice plans",
      "Progress dashboard and history",
    ],
    stack: ["React", "TypeScript", "Python / Node.js", "Database", "LLM API"],
    github: "",
    demo: "",
    caseStudy: "",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Database integration"] },
  { group: "Programming", items: ["Java", "Python"] },
  { group: "AI", items: ["LLM integration", "Embeddings", "RAG concepts", "OCR", "Evaluation"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { group: "Mobile", items: ["Flutter", "Mobile app development"] },
];

// Add verified entries only. Empty list shows an "add your entries" placeholder.
export const experience: { title: string; org: string; date: string; detail: string }[] = [
  { title: "B.E. Computer Science and Engineering", org: "Chennai Institute of Technology", date: "Ongoing · 3rd year", detail: "Core CS coursework, projects and campus activities." },
];

export const achievements: { title: string; detail: string; kind: string }[] = [];
