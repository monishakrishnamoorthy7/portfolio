// Edit everything about the portfolio here. Leave a link as "" to show it as unavailable.

export const profile = {
  name: "Monisha K",
  role: "Third-Year B.E. Computer Science and Engineering Student",
  college: "Chennai Institute of Technology",
  location: "Chennai, India",
  tagline:
    "I build practical software systems across full-stack development, AI-powered applications, and problem-solving.",
  rotating: ["Developer.", "Problem Solver.", "AI Builder.", "Future Software Engineer."],
  links: {
    github: "https://github.com/monishamonisha07",
    linkedin: "https://www.linkedin.com/in/themonisha/",
    email: "monishak.cse2024@citchennai.net",
    resume: "https://drive.google.com/file/d/1jhIn9yAPTR-oIVMsoS6wEqX6cdfKSK78/view?usp=drivesdk",
    leetcode: "https://leetcode.com/u/monimonisha07/",
  },
};

export const about = [
  { k: "Now", t: "Third-year CSE student", d: "Studying Computer Science and Engineering at Chennai Institute of Technology." },
  { k: "Building", t: "Full-stack & AI products", d: "Exploring full-stack development, AI-powered applications, and practical software systems." },
  { k: "Mindset", t: "Problem-solving", d: "I enjoy breaking down real problems and building clear, useful solutions." },
  { k: "Next", t: "Growing through projects", d: "Continuing to learn through hands-on development and collaborative opportunities." },
];

export const snapshot = [
  { label: "Education", value: "B.E. CSE" },
  { label: "College", value: "Chennai Institute of Technology" },
  { label: "Graduation", value: "2028" },
  { label: "CGPA", value: "8.3 / 10" },
  { label: "Current focus", value: "Full-Stack Development & AI" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  status: "Planned" | "In Progress" | "Completed" | "Featured";
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
    concept: "A bilingual document assistant concept exploring OCR and Retrieval-Augmented Generation (RAG) for working with documents.",
    problem: "Documents can be difficult to search and understand when information is spread across long or scanned files.",
    solution: "A planned OCR and retrieval-based workflow for exploring grounded document assistance.",
    architecture: ["Document input", "OCR exploration", "Retrieval exploration", "Assistant concept"],
    features: ["Bilingual document assistance concept", "OCR exploration", "Retrieval-Augmented Generation exploration"],
    stack: ["OCR", "RAG", "React.js"],
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
    concept: "An AI-assisted interview preparation concept for practicing technical interviews and identifying skill gaps.",
    problem: "Students rarely get structured, personalised interview practice and honest feedback.",
    solution: "A future concept for structured interview practice and feedback.",
    architecture: ["Preparation concept", "Question practice", "Feedback concept"],
    features: ["AI-assisted interview preparation concept"],
    stack: ["AI", "Interview preparation"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "certchain",
    name: "CertChain",
    category: "Blockchain / Full-Stack",
    status: "Planned",
    accent: "var(--violet)",
    concept: "A blockchain-based certificate verification system with hash-based integrity verification and a web interface.",
    problem: "Certificate verification needs a reliable way to check whether issued information has been altered.",
    solution: "Uses certificate hashes and a web verification workflow to support integrity checks.",
    architecture: ["Certificate hash", "Blockchain record", "Web3 connection", "Verification UI"],
    features: ["Blockchain-based verification", "Hash-based certificate integrity verification", "Web interface for verification"],
    stack: ["Solidity", "Ethereum", "Web3.js", "React.js", "SHA-256"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "safe-transit",
    name: "Safe Transit",
    category: "Full-Stack / Civic Technology",
    status: "Planned",
    accent: "var(--cyan)",
    concept: "A public transport safety feedback platform for reporting issues and following issue-tracking workflows.",
    problem: "Public transport concerns need a clear, accessible way to be reported and tracked.",
    solution: "A low-bandwidth-friendly interface with reporting workflows and an AI chatbot.",
    architecture: ["Issue report", "Workflow tracking", "MongoDB data", "AI chatbot"],
    features: ["Public transport issue reporting", "Issue-tracking workflows", "Low-bandwidth-friendly interface"],
    stack: ["React", "Express.js", "MongoDB", "AI chatbot"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    category: "Web Development",
    status: "Planned",
    accent: "var(--indigo)",
    concept: "An expense management application with database-backed records and bill scanning.",
    problem: "Recording expenses and extracting details from bills can be repetitive.",
    solution: "Combines expense records with OCR-based bill scanning.",
    architecture: ["Bill scan", "OCR extraction", "Database record", "Expense view"],
    features: ["Expense management", "Bill scanning", "Database-backed expense records"],
    stack: ["Next.js", "PostgreSQL", "Supabase", "OCR"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "sentiment-health-analysis",
    name: "AI Sentiment/Health Analysis",
    category: "AI / NLP",
    status: "Planned",
    accent: "var(--violet)",
    concept: "An AI-assisted text analysis project exploring sentiment and health-related language with retrieval and NLP concepts.",
    problem: "Large amounts of text can be difficult to review consistently and efficiently.",
    solution: "Uses retrieval and NLP concepts to assist with text analysis; it is not a medical diagnostic tool.",
    architecture: ["Text input", "Retrieval", "NLP analysis", "Assisted output"],
    features: ["AI-assisted text analysis", "Retrieval-Augmented Generation concepts", "NLP-based sentiment exploration"],
    stack: ["Python", "RAG", "Groq AI", "NLP"],
    github: "",
    demo: "",
    caseStudy: "",
  },
  {
    id: "boston-house-price",
    name: "Boston House Price Predictor",
    category: "Machine Learning",
    status: "Planned",
    accent: "var(--cyan)",
    concept: "A regression-based house-price prediction project focused on feature engineering and model evaluation.",
    problem: "Property price estimation requires understanding relationships between housing features and outcomes.",
    solution: "Applies machine learning regression models to explore price prediction.",
    architecture: ["Data preparation", "Feature engineering", "Regression model", "Evaluation"],
    features: ["House-price prediction", "Feature engineering", "Model evaluation"],
    stack: ["Python", "Scikit-learn", "Machine Learning"],
    github: "",
    demo: "",
    caseStudy: "",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "C++", "JavaScript", "Solidity"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend & databases", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { group: "AI / ML", items: ["Scikit-learn", "NLP", "RAG", "Generative AI", "OCR integration"] },
  { group: "Blockchain", items: ["Ethereum", "Solidity", "Smart Contracts", "SHA-256", "Web3.js"] },
  { group: "Tools & cloud", items: ["AWS", "Git", "GitHub", "Postman", "VS Code"] },
  { group: "Mobile", items: ["Flutter"] },
];

export const experience: { title: string; org: string; date: string; detail: string }[] = [
  { title: "Full Stack Developer Intern", org: "Acutix Soft LLP", date: "Remote · 2 months", detail: "Worked with React.js, Node.js, and MongoDB; developed full-stack features and REST APIs; worked on database queries and frontend/backend integration." },
  { title: "Web Development Intern", org: "Veerel Enterprises", date: "On-site · 1 month", detail: "Built an expense tracker using Next.js, PostgreSQL, and Supabase, including OCR-based bill scanning." },
  { title: "Android Developer Virtual Intern", org: "Google for Developers / AICTE / EduSkills", date: "Virtual · 10 weeks", detail: "Completed structured Android development learning and built mobile prototypes." },
];

export const achievements: { title: string; detail: string; kind: string }[] = [
  { title: "Solved 700+ LeetCode problems", detail: "Problem-solving milestone.", kind: "Coding" },
  { title: "LeetCode 100-Day Consistency Badge", detail: "Consistency milestone.", kind: "Coding" },
  { title: "Finalist — AWS ImpactX Challenge, IIT Bombay", detail: "Finalist recognition.", kind: "Challenge" },
  { title: "Finalist — Health Hack '26, VIT Bhopal", detail: "Finalist recognition.", kind: "Hackathon" },
  { title: "Best Presenter — CODEATHON", detail: "Best Presenter recognition.", kind: "Hackathon" },
  { title: "Top 20% — WorldQuant International Quant Championship (IQC), Stage 1", detail: "Stage 1 placement.", kind: "Competition" },
  { title: "Participant — Goldman Sachs India Hackathon 2026", detail: "Hackathon participation.", kind: "Hackathon" },
  { title: "Participant — Adobe Hackathon", detail: "Hackathon participation.", kind: "Hackathon" },
  { title: "Participant — Gen AI Hackathon", detail: "Hackathon participation.", kind: "Hackathon" },
];

export const certifications: { name: string; issuer: string; type: "Professional certification" | "Course completion" }[] = [
  { name: "AWS Certified AI Practitioner (AIF-C01)", issuer: "AWS", type: "Professional certification" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", type: "Course completion" },
  { name: "AI Fundamentals", issuer: "IBM SkillsBuild", type: "Course completion" },
  { name: "MongoDB Basics", issuer: "MongoDB", type: "Course completion" },
  { name: "Cybersecurity and IoT", issuer: "Cisco", type: "Course completion" },
  { name: "Introduction to IoT", issuer: "NPTEL", type: "Course completion" },
];
