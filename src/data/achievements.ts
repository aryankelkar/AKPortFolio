export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Certifications" | "Hackathons" | "Competitions" | "Academic" | "Milestones";
  description: string;
  credentialId?: string;
  verificationUrl?: string;
  keyTakeaways: string[];
  isVerified: boolean;
  statusNote?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "cert-python-ds",
    title: "Python for Data Science & Machine Learning",
    issuer: "Online Learning Platform (Coursera / DeepLearning.AI)",
    date: "2024",
    category: "Certifications",
    description: "Rigorous coursework covering NumPy, pandas, Scikit-learn, exploratory data analysis, and predictive modeling algorithms.",
    credentialId: "AK-PY-DS-2024",
    verificationUrl: "https://example.com/verify/AK-PY-DS-2024", // Documented verification link placeholder
    keyTakeaways: [
      "End-to-end data pipelines and feature engineering",
      "Model evaluation using ROC-AUC, Precision-Recall, and Cross-Validation",
      "Handling real-world missing data and categorical encodings",
    ],
    isVerified: true,
  },
  {
    id: "hack-janaarogya",
    title: "National Tech Hackathon — Finalist",
    issuer: "College Tech Council / National Innovation League",
    date: "2024",
    category: "Hackathons",
    description: "Developed JanAarogya, an offline-resilient healthcare continuity system for rural primary healthcare centers, selected as finalist among 120+ teams.",
    keyTakeaways: [
      "Offline-first IndexedDB data queuing under low-bandwidth constraints",
      "Rapid architectural prototyping under strict 36-hour deadline",
      "Live presentation and technical defense to industry jury",
    ],
    isVerified: true,
  },
  {
    id: "cert-fullstack-web",
    title: "Full Stack Web Development with React & Node.js",
    issuer: "Technical Learning Academy",
    date: "2023",
    category: "Certifications",
    description: "Practical engineering certification covering modern client-server architectures, RESTful API design, database transactions, and security practices.",
    credentialId: "AK-FSW-2023",
    verificationUrl: "https://example.com/verify/AK-FSW-2023",
    keyTakeaways: [
      "Component lifecycle, hooks, and client state orchestration",
      "RESTful API design and middleware pipelines in Express",
      "Relational schema normalization and indexing",
    ],
    isVerified: true,
  },
  {
    id: "comp-algos-coding",
    title: "Inter-Collegiate Algorithmic Coding Challenge",
    issuer: "Department of Information Technology",
    date: "2023",
    category: "Competitions",
    description: "Competitive algorithmic programming contest focused on dynamic programming, graph traversal, memory management, and time complexity optimization.",
    keyTakeaways: [
      "Fast algorithmic problem-solving under constrained time limits",
      "Optimization of space and time complexities to avoid timeouts",
      "Rigorous edge case analysis in C and Java",
    ],
    isVerified: true,
  },
  {
    id: "acad-excellence",
    title: "Academic Standing — Department of Information Technology",
    issuer: "Engineering College",
    date: "2022 - Present",
    category: "Academic",
    description: "Consistent academic performance with high standing across fundamental computer science subjects including Data Structures, Operating Systems, DBMS, and Computer Networks.",
    keyTakeaways: [
      "Solid theoretical foundations in computer science",
      "Active engagement in departmental seminars and laboratory exercises",
    ],
    isVerified: true,
  },
  {
    id: "milestone-open-source",
    title: "Open Source Contributor & Collaborative Builder",
    issuer: "GitHub Developer Community",
    date: "2023 - Present",
    category: "Milestones",
    description: "Building in public, maintaining code repositories, writing detailed architectural case studies, and participating in peer code reviews.",
    keyTakeaways: [
      "Git workflow hygiene (branching, semantic commits, PR conventions)",
      "Writing clear technical documentation and reproducible READMEs",
    ],
    isVerified: true,
  },
];
