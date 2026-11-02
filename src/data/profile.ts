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
  tagline: "Third Year Information Technology Student & Builder",
  headline: "I build digital products, explore intelligent systems, and turn complex problems into practical experiences.",
  supportingStatement:
    "A Third Year Information Technology student at Vidyalankar Institute of Technology (VIT), Mumbai. Building across software engineering, applied machine learning, and human-centered design with purpose, technical rigor, and curiosity.",
  email: "aryan.kelkar@example.com", // Configurable direct email
  github: "https://github.com/aryankelkar",
  linkedin: "https://linkedin.com/in/aryankelkar",
  resumeUrl: "/resume.pdf",
  location: "Mumbai, Maharashtra, India",
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
      tag: "HUMAN-CENTERED",
    },
  ],
  photos: {
    heroPortrait: {
      src: "/images/aryan/20251003_1023521.jpg",
      alt: "Aryan Kelkar — Primary portrait in front of modern architectural glass structure",
      caption: "Aryan Kelkar — Information Technology Student & Systems Builder",
      date: "2024",
      aspectRatio: "3/4",
    },
    floatingPortrait: {
      src: "/images/aryan/Picsart_26-03-03_09-23-55-544(1).jpg",
      alt: "Aryan Kelkar — Detail study in tailored navy blazer",
      caption: "Analytical focus // Systems inquiry",
      date: "2024",
      aspectRatio: "4/5",
    },
    documentaryPhoto: {
      src: "/images/aryan/documentary-hd.jpg",
      alt: "Aryan Kelkar — Atmospheric documentary photograph in misty mountain landscape",
      caption: "Field exploration // Perspective beyond the screen",
      date: "2024",
      aspectRatio: "3/4",
    },
    personalPortrait: {
      src: "/images/aryan/IMG_20260607_232508_546.png.webp",
      alt: "Aryan Kelkar — Candid personal portrait in blue hoodie and sunglasses outdoors",
      caption: "Curious by nature // Building with intention",
      date: "2024",
      aspectRatio: "3/4",
    },
    signaturePortrait: {
      src: "/images/aryan/Picsart_26-03-03_09-23-55-544(1).jpg",
      alt: "Aryan Kelkar — Signature closing portrait in tailored navy blazer",
      caption: "Aryan Kelkar // Information Technology Student & Builder",
      date: "2024",
      aspectRatio: "4/5",
    },
  },
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Vidyalankar Institute of Technology, Mumbai",
    status: "Third Year Undergraduate",
    expectedGraduation: "2026",
    highlights: [
      "Third Year B.Tech student in Information Technology at Vidyalankar Institute of Technology (VIT), Mumbai",
      "Event Head for 'ALGORYTHM' under the Technical Council (part of Student Council of VIT)",
      "Core member of Creatives Team at Information Technology Student Association (ITSA)",
      "Rigorous foundations in Data Structures, Operating Systems, DBMS, Computer Networks & Software Architecture",
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
      "I'm Aryan Kelkar, a Third Year Information Technology student at Vidyalankar Institute of Technology (VIT), Mumbai, interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
    full: [
      "I'm Aryan Kelkar, a Third Year Information Technology student at Vidyalankar Institute of Technology (VIT), Mumbai, interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
      "At VIT, I serve as an Event Head for 'ALGORHYTHM' under the Technical Council (part of the Student Council of VIT), organizing competitive technical events and tournaments, while also shaping visual media and branding as part of the Creatives Team at ITSA (Information Technology Student Association).",
      "I enjoy moving between software engineering, machine learning, and product design. What interests me most is understanding a problem deeply enough to build something that genuinely helps.",
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
