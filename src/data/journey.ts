export interface JourneyMilestone {
  year: string;
  quarterOrMonth?: string;
  title: string;
  organizationOrContext: string;
  category: "Education" | "Project" | "Hackathon" | "Milestone";
  description: string;
  technologiesUsed?: string[];
  link?: string;
  linkLabel?: string;
}

export const journeyData: JourneyMilestone[] = [
  {
    year: "2024 - Present",
    quarterOrMonth: "Mid 2024",
    title: "ReDevice & Advanced Full-Stack Systems",
    organizationOrContext: "Independent Engineering Initiative",
    category: "Project",
    description:
      "Designed and implemented ReDevice, an electronic waste triage and device redistribution portal with PostgreSQL, Next.js, and row-level security. Focused on sustainability, circular hardware economics, and robust relational modeling.",
    technologiesUsed: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    link: "/work/redevice",
    linkLabel: "View Case Study",
  },
  {
    year: "2024",
    quarterOrMonth: "Early 2024",
    title: "BankSense AI & Machine Learning Exploration",
    organizationOrContext: "Applied ML Project",
    category: "Project",
    description:
      "Engineered an imbalanced-dataset classification pipeline using Scikit-learn to predict banking deposit subscriptions. Analyzed feature importance, evaluated PR curves, and packaged the inference engine as a Dockerized Flask API.",
    technologiesUsed: ["Python", "Scikit-learn", "pandas", "Flask", "Docker"],
    link: "/work/banksense-ai",
    linkLabel: "View Case Study",
  },
  {
    year: "2024",
    quarterOrMonth: "Hackathon Season",
    title: "JanAarogya at National Tech Hackathon",
    organizationOrContext: "36-Hour Hackathon Finalist",
    category: "Hackathon",
    description:
      "Collaborated in a 4-person team to build an offline-first rural health management platform. Engineered client-side IndexedDB caching and conflict-resolution synchronization protocols under low-bandwidth network assumptions.",
    technologiesUsed: ["React", "Node.js", "MySQL", "IndexedDB", "Tailwind CSS"],
    link: "/work/janaarogya",
    linkLabel: "View Case Study",
  },
  {
    year: "2023",
    quarterOrMonth: "Mid 2023",
    title: "EKLAVYA & Civic Tech Initiatives",
    organizationOrContext: "Collaborative Student Project",
    category: "Project",
    description:
      "Built a unified scholarship discovery portal targeting marginalized students. Developed a declarative rule evaluation engine in Django to match student criteria with complex scholarship eligibility prerequisites.",
    technologiesUsed: ["Python", "Django", "PostgreSQL", "HTML5/CSS3"],
    link: "/work/eklavya",
    linkLabel: "View Case Study",
  },
  {
    year: "2023",
    quarterOrMonth: "Early 2023",
    title: "Core Computer Science & Graph Algorithms",
    organizationOrContext: "Academic Systems Engineering",
    category: "Education",
    description:
      "Deepened foundational knowledge of data structures, dynamic programming, and systems programming. Built the Smart Evacuation Router using modified graph pathfinding algorithms with hazard weight penalties.",
    technologiesUsed: ["C", "Java", "Graph Algorithms", "Data Structures"],
    link: "/work/smart-evacuation-router",
    linkLabel: "View Case Study",
  },
  {
    year: "2022",
    quarterOrMonth: "Autumn 2022",
    title: "Commenced B.Tech in Information Technology",
    organizationOrContext: "Undergraduate Degree",
    category: "Education",
    description:
      "Embarked on engineering degree with a focus on Information Technology, software development paradigms, logic design, and algorithmic problem solving.",
    technologiesUsed: ["C", "Algorithms", "Mathematics", "Logic Design"],
  },
];
