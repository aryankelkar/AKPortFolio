export interface ProfileData {
  name: string;
  tagline: string;
  headline: string;
  supportingStatement: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    status: string;
    expectedGraduation: string;
    highlights: string[];
  };
  focusAreas: string[];
  bio: {
    short: string;
    full: string[];
  };
}

export const profileData: ProfileData = {
  name: "Aryan Kelkar",
  tagline: "Information Technology Student & Software Builder",
  headline: "I build digital experiences, intelligent systems, and technology that solves real problems.",
  supportingStatement:
    "Information Technology student driven by software engineering, machine learning, and clean architectural design. Focused on creating reliable, human-centric solutions for real-world impact.",
  email: "aryan.kelkar@example.com", // Editable user contact email
  github: "https://github.com/aryankelkar",
  linkedin: "https://linkedin.com/in/aryankelkar",
  resumeUrl: "/resume.pdf", // User can place their actual resume.pdf in /public
  location: "India",
  education: {
    degree: "Bachelor of Technology / Engineering",
    field: "Information Technology",
    institution: "University Engineering Institute", // Documented editable placeholder
    status: "Undergraduate Student",
    expectedGraduation: "2026",
    highlights: [
      "Core focus on Data Structures, Algorithms, Software Engineering, and AI/ML",
      "Active participant in technical hackathons and competitive problem-solving",
      "Hands-on project work in full-stack web architectures and predictive analytics",
    ],
  },
  focusAreas: [
    "Software Development & Distributed Systems",
    "Applied Machine Learning & Predictive Modeling",
    "Accessible, High-Performance Web Applications",
    "Digital Sustainability & Civic Tech Solutions",
  ],
  bio: {
    short:
      "I'm Aryan Kelkar, an Information Technology student interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
    full: [
      "I'm Aryan Kelkar, an Information Technology student interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.",
      "My work spans web development, machine learning, and technology-driven projects, with an emphasis on usability, thoughtful engineering, and real-world applications.",
      "Beyond writing code, I enjoy exploring ideas, collaborating on multidisciplinary teams, dissecting technical architectures, and learning through hands-on experimentation.",
    ],
  },
};
