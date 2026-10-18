export interface PhotoSlot {
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  aspectRatio?: string;
}

export interface ProfileData {
  name: string;
  motto: string;
  tagline: string;
  headline: string;
  supportingStatement: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  disciplines: Array<{
    name: string;
    description: string;
    tag: string;
  }>;
  photos: {
    heroPortrait: PhotoSlot;
    floatingPortrait: PhotoSlot;
    documentaryPhoto: PhotoSlot;
    personalPortrait: PhotoSlot;
    signaturePortrait: PhotoSlot;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    status: string;
    expectedGraduation: string;
    highlights: string[];
  };
  focusAreas: string[];
  currentReading: string[];
  currentLearning: string[];
  bio: {
    short: string;
    full: string[];
    philosophy: string;
  };
  closing: {
    headline: string;
    supporting: string;
  };
}

export const profileData: ProfileData = {
  name: "Aryan Kelkar",
  motto: "INDEPENDENTLY CURIOUS. INTENTIONALLY BUILDING.",
  tagline: "Information Technology Student & Systems Builder",
  headline: "I build digital products, explore intelligent systems, and turn complex problems into practical experiences.",
  supportingStatement:
    "An Information Technology student who moves between software engineering, applied machine learning, and clean architectural design. Building with purpose, intellectual rigor, and an abiding curiosity about how complex systems interact with human needs.",
  email: "aryan.kelkar@example.com", // Configurable direct email
  github: "https://github.com/aryankelkar",
  linkedin: "https://linkedin.com/in/aryankelkar",
  resumeUrl: "/resume.pdf",
  location: "India",
  disciplines: [
    {
      name: "SOFTWARE ENGINEERING",
      description: "Distributed architectures, scalable relational models, and resilient full-stack systems.",
      tag: "ARCHITECTURES",
    },
    {
      name: "MACHINE LEARNING",
      description: "Supervised classification pipelines, imbalanced propensity models, and exploratory data analytics.",
      tag: "APPLIED ML",
    },
    {
      name: "HUMAN-CENTERED TECHNOLOGY",
      description: "Accessible interfaces, civic utility platforms, and circular sustainability tooling.",
      tag: "HUMANITY + SYSTEMS",
    },
  ],
  photos: {
    heroPortrait: {
      src: "/images/aryan/portrait-01.webp",
      alt: "Aryan Kelkar — Primary portrait in front of modern architectural glass structure",
      caption: "Aryan Kelkar — Information Technology Student & Builder",
      date: "2024",
      aspectRatio: "3/4",
    },
    floatingPortrait: {
      src: "/images/aryan/portrait-02.webp",
      alt: "Aryan Kelkar — Editorial portrait in tailored blazer",
      caption: "Detail study // Analytical perspective",
      date: "2024",
      aspectRatio: "4/5",
    },
    documentaryPhoto: {
      src: "/images/aryan/documentary-01.webp",
      alt: "Aryan Kelkar — Atmospheric documentary photograph in misty mountain landscape",
      caption: "Field exploration // Perspective beyond the screen",
      date: "2024",
      aspectRatio: "3/4",
    },
    personalPortrait: {
      src: "/images/aryan/portrait-03.webp",
      alt: "Aryan Kelkar — Candid personal portrait",
      caption: "At the intersection of engineering and curiosity",
      date: "2024",
      aspectRatio: "1/1",
    },
    signaturePortrait: {
      src: "/images/aryan/signature-portrait.webp",
      alt: "Aryan Kelkar — Signature high-contrast editorial portrait",
      caption: "Document Reference: AK-2026 // Signature Record",
      date: "2024",
      aspectRatio: "4/5",
    },
  },
  education: {
    degree: "Bachelor of Technology / Engineering",
    field: "Information Technology",
    institution: "University Engineering Institute", // Documented editable placeholder
    status: "Undergraduate Student",
    expectedGraduation: "2026",
    highlights: [
      "Rigorous foundations in Data Structures, Discrete Math, Operating Systems & DBMS",
      "Applied machine learning modeling and high-performance full-stack architectures",
      "Active participant in technical hackathons and competitive problem-solving leagues",
    ],
  },
  focusAreas: [
    "Full-Stack Web Architectures & Edge Services",
    "Applied Machine Learning & Predictive Analytics",
    "Civic Technology & Environmental Sustainability Tooling",
    "Graph Algorithms & Dynamic Pathfinding Simulations",
  ],
  currentReading: [
    "Designing Data-Intensive Applications — Martin Kleppmann",
    "The Design of Everyday Things — Don Norman",
    "Interpretable Machine Learning — Christoph Molnar",
  ],
  currentLearning: [
    "Rust for systems and memory-safe network tooling",
    "ONNX Web runtime for client-side model inference",
    "Distributed consensus and event-driven microservice patterns",
  ],
  bio: {
    short:
      "I'm Aryan Kelkar, an Information Technology student interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
    full: [
      "I'm Aryan Kelkar, an Information Technology student interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
      "I enjoy moving between software engineering, machine learning, and product design. What interests me most is understanding a problem deeply enough to build something that genuinely helps.",
      "I learn by experimenting, building, breaking things, and improving them. Rather than treating code as abstract syntax, I view engineering as a practical medium for reducing friction, expanding opportunity, and solving real human challenges.",
    ],
    philosophy:
      "Good systems are invisible when they work, honest when they fail, and built with empathy for the people who rely on them.",
  },
  closing: {
    headline: "Have something worth building?",
    supporting:
      "Open to interesting ideas, meaningful problems, and collaborative engineering.",
  },
};
