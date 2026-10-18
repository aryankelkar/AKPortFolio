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
    id: "act-tech-committee",
    title: "Student Technical Committee & Coding Club",
    organization: "Department of Information Technology",
    role: "Technical Member & Peer Mentor",
    period: "2023 - Present",
    category: "Technical Club",
    description:
      "Active participant in departmental technical initiatives, conducting peer study sessions on data structures and organizing coding practice contests.",
    contributions: [
      "Conducted weekly problem-solving walkthroughs for junior students on basic algorithms and Git version control.",
      "Assisted in coordinating departmental coding competitions and technical quizzes during annual college festivals.",
      "Contributed to building registration and scoring scripts for club activities.",
    ],
    impactOutcome: "Mentored 30+ junior students in foundational programming and Git basics.",
  },
  {
    id: "act-hackathon-team",
    title: "Hackathon Team Captain & Technical Lead",
    organization: "Collegiate Innovation Group",
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
    id: "act-campus-events",
    title: "Annual Technical Symposium Coordination",
    organization: "College Engineering Festival",
    role: "Logistics & Tech Operations Volunteer",
    period: "2023",
    category: "Event Organizing",
    description:
      "Volunteered for technical festival operations, ensuring smooth lab workstation setups, network stability, and participant registration desks.",
    contributions: [
      "Configured lab workstation environments with necessary compilers and developer SDKs for 100+ participants.",
      "Managed live scoreboard updates and display monitors during coding tournament rounds.",
    ],
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
