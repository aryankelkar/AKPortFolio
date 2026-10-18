export interface SkillItem {
  name: string;
  category: "Programming" | "Frontend" | "Backend" | "Databases" | "AI & ML" | "Cloud & Tools";
  demonstratedIn?: string[]; // IDs or names of projects
  description?: string;
}

export interface SkillCategory {
  title: string;
  category: "Programming" | "Frontend" | "Backend" | "Databases" | "AI & ML" | "Cloud & Tools";
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    category: "Programming",
    description: "Core languages used for systems programming, data manipulation, and software construction.",
    skills: [
      { name: "Python", category: "Programming", demonstratedIn: ["BankSense AI", "KrishiMitra"], description: "Primary language for data science, machine learning models, and scripting." },
      { name: "TypeScript", category: "Programming", demonstratedIn: ["ReDevice", "Personal Portfolio"], description: "Type-safe application engineering across full-stack architectures." },
      { name: "JavaScript", category: "Programming", demonstratedIn: ["JanAarogya", "CampusPLAY"], description: "Modern ES6+ client-side logic and asynchronous runtime patterns." },
      { name: "Java", category: "Programming", demonstratedIn: ["Smart Evacuation Router"], description: "Object-oriented software principles and backend service components." },
      { name: "C", category: "Programming", demonstratedIn: ["Smart Evacuation Router"], description: "Systems fundamentals, memory management, and algorithmic problem solving." },
    ],
  },
  {
    title: "Frontend Development",
    category: "Frontend",
    description: "Modern, responsive interface engineering emphasizing accessibility, typography, and performance.",
    skills: [
      { name: "React", category: "Frontend", demonstratedIn: ["ReDevice", "JanAarogya"], description: "Declarative UI composition, state lifecycle, and reusable components." },
      { name: "Next.js", category: "Frontend", demonstratedIn: ["ReDevice", "Personal Portfolio"], description: "App Router architecture, Server Components, and optimized routing." },
      { name: "Tailwind CSS", category: "Frontend", demonstratedIn: ["ReDevice", "JanAarogya"], description: "Utility-first design tokens and responsive layout systems." },
      { name: "HTML5 & Semantic Web", category: "Frontend", demonstratedIn: ["EKLAVYA"], description: "Accessible markup, screen-reader compatibility, and DOM structures." },
      { name: "CSS3 & Design Tokens", category: "Frontend", demonstratedIn: ["Personal Portfolio"], description: "Custom properties, typography scales, glassmorphism, and responsive units." },
    ],
  },
  {
    title: "Backend Engineering",
    category: "Backend",
    description: "Server-side architectures, RESTful APIs, routing layers, and service orchestration.",
    skills: [
      { name: "Node.js", category: "Backend", demonstratedIn: ["ReDevice", "JanAarogya"], description: "Event-driven asynchronous service runtimes and API microservices." },
      { name: "Express", category: "Backend", demonstratedIn: ["JanAarogya", "CampusPLAY"], description: "Lightweight middleware pipelines and REST endpoint controllers." },
      { name: "Flask", category: "Backend", demonstratedIn: ["BankSense AI", "KrishiMitra"], description: "Micro-framework for serving machine learning models and inference APIs." },
      { name: "Django", category: "Backend", demonstratedIn: ["EKLAVYA"], description: "Batteries-included web framework with secure ORM and authentication workflows." },
      { name: "Spring Boot", category: "Backend", demonstratedIn: ["Enterprise System Modules"], description: "Enterprise Java backend components and structured layered architecture." },
    ],
  },
  {
    title: "Databases & Storage",
    category: "Databases",
    description: "Relational and document storage, schema design, transactional integrity, and querying.",
    skills: [
      { name: "PostgreSQL", category: "Databases", demonstratedIn: ["ReDevice"], description: "Relational modeling, indexing, foreign keys, and ACID compliance." },
      { name: "MongoDB", category: "Databases", demonstratedIn: ["CampusPLAY"], description: "Flexible document-based collections for dynamic schemas and fast lookups." },
      { name: "MySQL", category: "Databases", demonstratedIn: ["JanAarogya"], description: "Relational database queries, join optimization, and table normalization." },
      { name: "Supabase", category: "Databases", demonstratedIn: ["ReDevice"], description: "Postgres-backed backend-as-a-service with Row Level Security." },
      { name: "Firebase", category: "Databases", demonstratedIn: ["KrishiMitra"], description: "Realtime data sync and fast prototype persistence." },
    ],
  },
  {
    title: "AI & Machine Learning",
    category: "AI & ML",
    description: "Exploratory data analysis, predictive modeling, classification, and validation pipelines.",
    skills: [
      { name: "Scikit-learn", category: "AI & ML", demonstratedIn: ["BankSense AI"], description: "Supervised classification, regression, and model pipeline transformers." },
      { name: "pandas", category: "AI & ML", demonstratedIn: ["BankSense AI"], description: "Dataframe wrangling, missing-value imputation, and feature extraction." },
      { name: "NumPy", category: "AI & ML", demonstratedIn: ["BankSense AI"], description: "High-performance multidimensional array math and numerical computations." },
      { name: "Model Evaluation & Metrics", category: "AI & ML", demonstratedIn: ["BankSense AI"], description: "ROC-AUC, precision-recall analysis, confusion matrices, and cross-validation." },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    category: "Cloud & Tools",
    description: "Version control, containerization, collaboration environments, and deployment workflows.",
    skills: [
      { name: "Git & GitHub", category: "Cloud & Tools", demonstratedIn: ["All Projects"], description: "Feature branching, commit hygiene, code reviews, and releases." },
      { name: "Docker", category: "Cloud & Tools", demonstratedIn: ["ReDevice", "BankSense AI"], description: "Containerization of services for reproducible local and staging environments." },
      { name: "Google Cloud", category: "Cloud & Tools", demonstratedIn: ["Cloud Learning Lab"], description: "Cloud storage, compute instances, and basic IAM fundamentals." },
      { name: "Linux / CLI", category: "Cloud & Tools", demonstratedIn: ["All Work"], description: "Shell scripting, process management, and build automation." },
    ],
  },
];
