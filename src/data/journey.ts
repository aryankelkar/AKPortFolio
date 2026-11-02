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
    title: "Event Head — 'ALGORHYTHM' & Technical Council",
    organizationOrContext: "Technical Council (Student Council of VIT), Mumbai",
    category: "Milestone",
    description:
      "Selected as Event Head for 'ALGORHYTHM' under the Technical Council (part of Student Council of VIT), steering flagship algorithmic challenges, coding competitions, and technical logistics across collegiate fixtures.",
    technologiesUsed: ["Event Leadership", "Algorithmic Contests", "Technical Operations", "Team Coordination"],
  },
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
    year: "2023 - Present",
    quarterOrMonth: "Mid 2023",
    title: "Creatives Team — ITSA",
    organizationOrContext: "Information Technology Student Association (ITSA), VIT Mumbai",
    category: "Milestone",
    description:
      "Active member of the Creatives Team at ITSA, shaping the visual communication, event branding, digital collateral, and creative media for the Department of Information Technology at Vidyalankar Institute of Technology.",
    technologiesUsed: ["Brand Identity", "Visual Media", "Digital Design", "UI/UX"],
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
    year: "2022 - Present",
    quarterOrMonth: "Autumn 2022",
    title: "B.Tech in Information Technology (Third Year)",
    organizationOrContext: "Vidyalankar Institute of Technology, Mumbai",
    category: "Education",
    description:
      "Pursuing Bachelor of Technology in Information Technology. Rigorous coursework spanning Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.",
    technologiesUsed: ["C", "Java", "Python", "Data Structures", "DBMS", "Operating Systems"],
  },
];
