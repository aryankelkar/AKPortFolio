export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  category: "Leadership" | "Volunteering" | "Event Organizing" | "Technical Club" | "Sports";
  description: string;
  contributions: string[];
  impactOutcome?: string;
}

export const activitiesData: ActivityItem[] = [
  {
    id: "act-algorythm-head",
    title: "Event Head — 'ALGORYTHM'",
    organization: "Technical Council (Student Council of VIT), Vidyalankar Institute of Technology",
    role: "Event Head & Technical Lead",
    period: "2023 - Present",
    category: "Leadership",
    description:
      "Spearheaded flagship technical events, algorithmic problem-solving contests, and competitive coding fixtures under 'ALGORYTHM' as part of the Technical Council (Student Council of VIT).",
    contributions: [
      "Conceptualized and structured event formats, judging criteria, and algorithmic challenges for 'ALGORYTHM'.",
      "Directed cross-functional student teams managing stage logistics, participant triage, and technical operations.",
      "Coordinated live scoring platforms and technical setups across campus computing laboratories.",
    ],
    impactOutcome: "Orchestrated high-impact technical events engaging collegiate engineering competitors across Mumbai.",
  },
  {
    id: "act-itsa-creatives",
    title: "Creatives Team Member",
    organization: "Information Technology Student Association (ITSA), VIT Mumbai",
    role: "Creatives & Visual Media Designer",
    period: "2023 - Present",
    category: "Technical Club",
    description:
      "Active member of the Creatives Team at ITSA, shaping the visual communication, event branding, digital collateral, and creative media for the Department of Information Technology.",
    contributions: [
      "Designed high-impact event posters, identity badges, and digital promotional collateral for technical symposiums.",
      "Collaborated with technical leads to visually translate advanced software and ML themes for the student community.",
      "Maintained aesthetic consistency across departmental newsletters, announcements, and digital media channels.",
    ],
    impactOutcome: "Enhanced visual identity and boosted student engagement across departmental workshops and bootcamps.",
  },
  {
    id: "act-hackathon-team",
    title: "Hackathon Team Captain & Technical Lead",
    organization: "Collegiate Innovation Group, VIT Mumbai",
    role: "Project Lead & Architect",
    period: "2023 - 2024",
    category: "Leadership",
    description:
      "Formed and coordinated cross-functional student teams for regional and national hackathons, driving project ideation, technical architecture, and sprint timelines.",
    contributions: [
      "Facilitated brainstorm sessions mapping social issues (e-waste, healthcare access) to viable software prototypes.",
      "Maintained task boards, code reviews, and Git repository branching hygiene under 36-hour sprint constraints.",
      "Delivered live architecture pitches to judges and industry panelists.",
    ],
    impactOutcome: "Led team to Finalist recognition in National Tech Hackathon with JanAarogya.",
  },
  {
    id: "act-social-outreach",
    title: "Digital Literacy & Community Outreach Initiative",
    organization: "Community Outreach Cell",
    role: "Student Volunteer",
    period: "2022 - 2023",
    category: "Volunteering",
    description:
      "Participated in student community outreach drives introducing basic computer literacy, safe internet practices, and digital tools to local students.",
    contributions: [
      "Demonstrated basic digital applications, online safety, and educational web portals to school students.",
      "Assisted in cataloging and inspecting donated computer equipment for local community centers.",
    ],
  },
];
