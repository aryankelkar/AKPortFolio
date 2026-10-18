export interface EngineeringDecision {
  decision: string;
  rationale: string;
  alternativeConsidered: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface MetricItem {
  metric: string;
  value: string;
  context: string;
}

export interface CaseStudy {
  problemStatement: string;
  objectives: string[];
  myContribution: string[];
  architecture: {
    overview: string;
    frontend: string;
    backend: string;
    database: string;
    infrastructure?: string;
  };
  engineeringDecisions: EngineeringDecision[];
  challengesAndSolutions: ChallengeSolution[];
  resultsAndMetrics: MetricItem[];
  limitations: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "Full Stack Web" | "AI & Machine Learning" | "Civic Tech" | "Systems & Algorithms";
  role: string;
  timeline: string;
  teamSize: string;
  status:
    | "Completed Prototype"
    | "Active Development"
    | "Hackathon Finalist"
    | "Hackathon Project"
    | "Academic Project";
  featured: boolean;
  featuredOrder?: number;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    slug: "redevice",
    title: "ReDevice",
    subtitle: "Circular Electronics Donation & E-Waste Recovery Platform",
    tagline: "Bridging the digital divide while preventing hazardous electronic waste through verified device lifecycles.",
    category: "Full Stack Web",
    role: "Lead Full Stack Developer & System Architect",
    timeline: "2024 - Present",
    teamSize: "3 Members",
    status: "Completed Prototype",
    featured: true,
    featuredOrder: 1,
    summary:
      "A platform connecting educational institutions and donors with transparent hardware triage, refurbishing verification, and certified recycling pathways to extend device utility and prevent toxic electronic waste.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Node.js",
      "REST APIs",
    ],
    githubUrl: "https://github.com/aryankelkar/redevice",
    demoUrl: "https://redevice-demo.vercel.app",
    caseStudy: {
      problemStatement:
        "Discarded electronic devices create rapid toxic landfill accumulation, while underfunded educational centers face severe hardware shortages. Traditional recycling programs lack chain-of-custody transparency, discouraging individual and corporate donations.",
      objectives: [
        "Create an intuitive multi-stakeholder donation workflow for donors, refurbishers, and schools.",
        "Implement a transparent hardware status tracking pipeline from intake to dispatch.",
        "Provide verifiable audit trails for refurbished hardware distributions and safe e-waste disposals.",
      ],
      myContribution: [
        "Architected the relational schema in PostgreSQL ensuring strict state transitions across device triage stages.",
        "Engineered the responsive Next.js frontend with accessible forms and filterable item inventories.",
        "Built serverless API routes with row-level security for donor authentication and recipient verification.",
      ],
      architecture: {
        overview:
          "Modular client-server architecture built on Next.js App Router with serverless endpoint handlers and PostgreSQL persistence via Supabase.",
        frontend:
          "Next.js 15 App Router, React Server Components, Tailwind CSS, Lucide icons, responsive accessible modal dialogs.",
        backend:
          "Next.js Server Actions and Route Handlers with Zod validation and structured error response envelopes.",
        database:
          "PostgreSQL with relational tables for Users, Devices, InspectionLogs, Allocations, and E-Waste Recycling Certificates.",
        infrastructure: "Vercel edge network deployment with continuous integration hooks via GitHub Actions.",
      },
      engineeringDecisions: [
        {
          decision: "State machine driven status transitions for hardware items",
          rationale: "Prevents invalid edge states, such as a device being marked 'allocated' before passing hardware testing.",
          alternativeConsidered: "Simple enum field updates without transition validations, which caused synchronization bugs in initial tests.",
        },
        {
          decision: "Server Components for inventory rendering",
          rationale: "Reduced client bundle size significantly and enabled fast initial page loads for catalog queries.",
          alternativeConsidered: "Pure client-side fetching with useEffect, which created noticeable layout shifts during search.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Managing variable hardware specification fields across laptops, desktops, and mobile devices.",
          solution: "Utilized a JSONB attributes column in PostgreSQL alongside structured typed schemas in TypeScript to support variable hardware specs without excessive table migrations.",
        },
        {
          challenge: "Preventing double-allocation of refurbished devices during concurrent school batch requests.",
          solution: "Implemented database row locks inside an atomic transaction when matching schools with available inventory.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Catalog Load Time",
          value: "< 350ms",
          context: "Optimized server component rendering with database indexing on status and location.",
        },
        {
          metric: "State Transition Integrity",
          value: "100%",
          context: "All status changes validated against strict transition matrix in middleware.",
        },
        {
          metric: "Supported Hardware Profiles",
          value: "5 Categories",
          context: "Laptops, Desktops, Tablets, Monitors, and Networking peripherals.",
        },
      ],
      limitations: [
        "Requires manual verification by trusted volunteers or certified refurbishing partners.",
        "Real-time chat between donors and recipient schools is currently handled via asynchronous email notifications.",
      ],
      futureImprovements: [
        "Automated hardware specification diagnostic utility via WebUSB/WebHID browser inspection.",
        "QR code tracking labels for automated parcel intake at recycling hubs.",
      ],
    },
  },
  {
    slug: "banksense-ai",
    title: "BankSense AI",
    subtitle: "Predictive Analytics & Customer Propensity Intelligence",
    tagline: "Machine learning pipeline identifying high-propensity financial prospects while optimizing outreach efficiency.",
    category: "AI & Machine Learning",
    role: "ML Engineer & Data Pipeline Developer",
    timeline: "2024",
    teamSize: "Individual Project",
    status: "Completed Prototype",
    featured: true,
    featuredOrder: 2,
    summary:
      "A machine learning application trained on historical banking campaign datasets to predict term deposit subscription propensity. Features an exploratory data dashboard and interactive inference endpoint with explainable feature importance.",
    technologies: [
      "Python",
      "Scikit-learn",
      "pandas",
      "NumPy",
      "Flask",
      "Matplotlib",
      "Docker",
    ],
    githubUrl: "https://github.com/aryankelkar/banksense-ai",
    demoUrl: "https://banksense-ai.demo.local",
    caseStudy: {
      problemStatement:
        "Retail banks spend significant operational resources on indiscriminate telemarketing campaigns with low single-digit conversion rates. Contact fatigue harms customer relationships while escalating acquisition costs.",
      objectives: [
        "Analyze demographic, economic, and campaign history features to identify deposit conversion patterns.",
        "Train and tune supervised classification models with techniques for handling class imbalance.",
        "Provide an explainable API interface demonstrating the primary features driving each prediction.",
      ],
      myContribution: [
        "Performed exploratory data analysis and feature engineering on a 40,000+ record banking dataset.",
        "Addressed class imbalance (approximately 11% positive conversion rate) using SMOTE and class-weight balancing.",
        "Trained multiple models (Logistic Regression, Random Forest, XGBoost) and evaluated via ROC-AUC and PR curves.",
        "Containerized the Flask inference microservice with automated input validation.",
      ],
      architecture: {
        overview:
          "Modular data pipeline with preprocessing transformers, serialised scikit-learn model artifacts, and a lightweight Flask REST microservice.",
        frontend: "Responsive interactive client for dynamic what-if parameter simulation and visual confidence gauges.",
        backend: "Python 3.11 Flask service with validation schemas and scikit-learn model inference.",
        database: "Parquet formatted preprocessed analytical datastore and serialized pipeline pickle artifacts.",
        infrastructure: "Docker containerized microservice suitable for local orchestration or cloud deployment.",
      },
      engineeringDecisions: [
        {
          decision: "Prioritized ROC-AUC and Precision-Recall Area over raw Accuracy",
          rationale: "In an imbalanced dataset (89% negative), a naive model predicting all negatives achieves 89% accuracy while having zero utility.",
          alternativeConsidered: "Relying on standard classification accuracy, which produced misleading early checkpoints.",
        },
        {
          decision: "Scikit-learn ColumnTransformer within a strict Pipeline",
          rationale: "Prevents data leakage between cross-validation folds during scaling and one-hot encoding.",
          alternativeConsidered: "Transforming the entire dataset prior to splitting, which artificially inflated validation scores.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Heavy class imbalance distorting model decision boundaries.",
          solution: "Applied balanced class weights during model training and tuned the decision threshold based on business recall targets rather than a default 0.5 cutoff.",
        },
        {
          challenge: "Non-technical stakeholders requiring transparency into prediction rationale.",
          solution: "Integrated tree-based feature importance outputs into the prediction payload, detailing top positive and negative influencing variables.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Random Forest Baseline (Test Split)",
          value: "0.7979 ROC-AUC",
          context: "Documented evaluation on test split: Accuracy 0.8752, Precision 0.4677, Recall 0.4858, F1 0.4766, PR-AUC 0.4442.",
        },
        {
          metric: "Tuned Ensemble Target (CV)",
          value: "0.892 ROC-AUC",
          context: "Experimental checkpoint with SMOTE balancing, hyperparameter tuning, and gradient boosting across 5-fold cross-validation.",
        },
        {
          metric: "Dataset Scope",
          value: "41,188 Records",
          context: "UCI Bank Marketing benchmark dataset across 20 demographic, economic, and past campaign features.",
        },
        {
          metric: "Inference Latency",
          value: "< 25ms",
          context: "Single-record prediction response time in containerized Flask microservice runtime.",
        },
      ],
      limitations: [
        "Economic indicator features (e.g., euribor 3 month rate) require periodic pipeline updates to remain temporally valid.",
        "The prototype is trained on benchmark historical data and requires domain retraining for private enterprise datasets.",
      ],
      futureImprovements: [
        "Integration of SHAP (SHapley Additive exPlanations) for granular individual prediction explanations.",
        "Automated model drift detection monitor using Kolmogorov-Smirnov statistical tests.",
      ],
    },
  },
  {
    slug: "janaarogya",
    title: "JanAarogya",
    subtitle: "Rural Healthcare Continuity & Primary Care Diagnostic Portal",
    tagline: "Empowering rural health workers with offline-capable digital records and clinical continuity.",
    category: "Full Stack Web",
    role: "Full Stack Developer & API Designer",
    timeline: "2024",
    teamSize: "4 Members",
    status: "Hackathon Finalist",
    featured: true,
    featuredOrder: 3,
    summary:
      "A healthcare management system engineered for remote primary health centers, enabling community health workers to log diagnostic histories, track vaccination schedules, and flag high-risk maternal health indicators.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "IndexedDB",
      "Service Workers",
    ],
    githubUrl: "https://github.com/aryankelkar/janaarogya",
    caseStudy: {
      problemStatement:
        "Rural primary health clinics frequently suffer from intermittent electrical and internet connectivity. Paper registers cause lost patient histories, missed childhood immunization schedules, and delayed referrals for high-risk cases.",
      objectives: [
        "Design an offline-resilient digital clinical logging system for tablet devices.",
        "Provide standardized diagnostic intake forms following national health guidelines.",
        "Enable automatic background synchronization when internet connectivity resumes.",
      ],
      myContribution: [
        "Designed the MySQL relational schema for patient profiles, visit logs, prescriptions, and immunization schedules.",
        "Implemented the offline-first IndexedDB synchronization protocol with conflict resolution timestamps.",
        "Built REST endpoints in Node.js/Express with JWT session security and role-based access control.",
      ],
      architecture: {
        overview:
          "Progressive Web App with client-side cache fallback, IndexedDB storage queue, and an Express REST API backend backed by MySQL.",
        frontend: "React, Vite, Service Worker cache strategies, IndexedDB local storage adapter.",
        backend: "Node.js, Express, middleware token verification, relational query builder.",
        database: "MySQL with normalized tables and indexes on village census identifiers.",
      },
      engineeringDecisions: [
        {
          decision: "Offline-first IndexedDB buffer with monotonic timestamp queuing",
          rationale: "Ensures health workers can continue logging diagnostic data even in zero-reception rural field areas.",
          alternativeConsidered: "Requiring an uninterrupted cellular connection, which caused frequent app freeze-ups in field trials.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling record synchronization conflicts when two workers update the same patient profile offline.",
          solution: "Implemented a field-level last-write-wins mechanism using server-verified transaction timestamps and manual resolution flags for divergent clinical notes.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Sync Recovery Time",
          value: "< 2.1s",
          context: "Batch synchronizing 50 cached patient records upon network reconnection.",
        },
        {
          metric: "Bundle Size",
          value: "< 180 KB",
          context: "Lean client payload to ensure rapid loading on 3G rural mobile connections.",
        },
      ],
      limitations: [
        "Biometric patient deduplication is not yet supported.",
        "Requires local device storage management when tracking hundreds of high-resolution diagnostic images.",
      ],
      futureImprovements: [
        "Voice-assisted form completion in regional Indian languages.",
        "Lightweight on-device symptom triage rules engine.",
      ],
    },
  },
  {
    slug: "eklavya",
    title: "EKLAVYA",
    subtitle: "Unified Tribal Welfare & Scholarship Discovery Portal",
    tagline: "Simplifying eligibility discovery and documentation verification for underprivileged students.",
    category: "Civic Tech",
    role: "Backend & Form Workflow Developer",
    timeline: "2023 - 2024",
    teamSize: "3 Members",
    status: "Completed Prototype",
    featured: true,
    featuredOrder: 4,
    summary:
      "A centralized civic technology platform designed to streamline discovery, document pre-validation, and application tracking for governmental and private educational scholarships targeted at marginalized students.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML5 / CSS3",
      "JavaScript",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/aryankelkar/eklavya",
    caseStudy: {
      problemStatement:
        "Students from remote and marginalized communities struggle to navigate disparate government portals, complex eligibility rules, and stringent document requirements, resulting in underutilized scholarship funds.",
      objectives: [
        "Consolidate multiple state and national scholarship opportunities into a unified eligibility engine.",
        "Implement a step-by-step document readiness checklist to reduce rejection due to invalid certificates.",
        "Provide a clear, accessible multilingual interface.",
      ],
      myContribution: [
        "Engineered the Django rule evaluation engine that maps student profile attributes to scholarship eligibility criteria.",
        "Developed document verification workflows with secure local file storage and format validations.",
        "Built student application tracking dashboards with timeline milestones.",
      ],
      architecture: {
        overview: "Django Model-View-Template architecture with PostgreSQL database and modular eligibility rules engine.",
        frontend: "Responsive HTML5, semantic accessibility tags, accessible form controls, and CSS styling.",
        backend: "Django web framework with custom model managers, authentication views, and query optimization.",
        database: "PostgreSQL with indexing on income brackets, caste categories, and educational tiers.",
      },
      engineeringDecisions: [
        {
          decision: "Declarative Rule Evaluation Engine in Python",
          rationale: "Allows adding new scholarship criteria without modifying core application database schemas.",
          alternativeConsidered: "Hardcoded if-else decision trees in controllers, which proved unmaintainable after 10 schemes.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling complex criteria with interlocking income, caste, academic score, and regional rules.",
          solution: "Modeled criteria as composable predicate objects in Django, allowing arbitrary Boolean combinations.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Criteria Match Speed",
          value: "< 45ms",
          context: "Evaluating a candidate profile against 25+ scholarship rule sets.",
        },
        {
          metric: "WCAG Accessibility",
          value: "AA Level Target",
          context: "High-contrast color ratios, semantic heading hierarchies, and keyboard traversals.",
        },
      ],
      limitations: [
        "Final application submission must still be executed on official government endpoints.",
      ],
      futureImprovements: [
        "Direct API integration with DigiLocker for instant cryptographic document verification.",
      ],
    },
  },
  {
    slug: "smart-evacuation-router",
    title: "Smart Evacuation Router",
    subtitle: "Dynamic Egress Pathfinder & Hazard Avoidance Simulation",
    tagline: "Graph-theoretic algorithmic system for real-time optimal evacuation path calculation in complex structures.",
    category: "Systems & Algorithms",
    role: "Algorithm Designer & Core Developer",
    timeline: "2023",
    teamSize: "Academic Pair Project",
    status: "Academic Project",
    featured: false,
    summary:
      "An algorithmic simulation tool that models multi-floor building topologies as weighted dynamic graphs to compute safest emergency exit routes while dynamically penalizing hazard-compromised nodes.",
    technologies: ["C", "Java", "Data Structures", "Graph Algorithms", "Swing UI"],
    githubUrl: "https://github.com/aryankelkar/smart-evacuation-router",
    caseStudy: {
      problemStatement:
        "During emergency scenarios (fire, structural failure), static emergency exit signs can inadvertently direct occupants directly toward spreading hazard zones, exacerbating casualties.",
      objectives: [
        "Model building layouts as dynamic weighted graph structures.",
        "Implement real-time shortest-safest path recalculations when nodes or edges become blocked.",
        "Provide an interactive visual simulation demonstrating rerouting behavior.",
      ],
      myContribution: [
        "Implemented modified Dijkstra and A* pathfinding algorithms with dynamic hazard cost weight adjustments.",
        "Created adjacency list representations with memory safety checks in C and object-oriented models in Java.",
        "Engineered the node-link visualizer displaying hazard propagation and bottleneck congestion.",
      ],
      architecture: {
        overview: "Algorithmic simulation engine decoupling graph computation from 2D rendering representations.",
        frontend: "Java 2D canvas visualization with real-time speed controls and hazard toggle switches.",
        backend: "Custom graph engine supporting up to 500 connected structural nodes with millisecond route recomputation.",
        database: "File-based JSON layout graph definitions and scenario event logs.",
      },
      engineeringDecisions: [
        {
          decision: "Dynamic exponential hazard penalties rather than binary edge removal",
          rationale: "Prevents immediate route thrashing while discouraging paths in close proximity to smoke/heat sources.",
          alternativeConsidered: "Hard edge deletion, which caused disconnected graph partitions and trapped agent states.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing bottleneck stampedes when all simulated agents choose the identical primary exit.",
          solution: "Introduced edge capacity constraints and dynamic delay costs proportional to agent density.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Route Recomputation",
          value: "< 12ms",
          context: "Across 250 nodes upon unexpected simulated hallway blockage.",
        },
        {
          metric: "Evacuation Time Reduction",
          value: "~28%",
          context: "Compared to static nearest-exit heuristics under spreading hazard conditions.",
        },
      ],
      limitations: [
        "Current implementation operates in 2D simulated planar projections.",
      ],
      futureImprovements: [
        "IoT sensor ingestion for real-time smoke and temperature hardware integration.",
      ],
    },
  },
  {
    slug: "campusplay",
    title: "CampusPLAY",
    subtitle: "Inter-Collegiate Sports & Tournament Management Hub",
    tagline: "Coordinating tournament brackets, live scoring, and facility scheduling for collegiate athletics.",
    category: "Full Stack Web",
    role: "Full Stack Developer",
    timeline: "2023",
    teamSize: "2 Members",
    status: "Completed Prototype",
    featured: false,
    summary:
      "A platform addressing chaotic campus tournament coordination by unifying team registrations, automated single/double elimination bracket generation, and live scoreboard updates.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/aryankelkar/campusplay",
    caseStudy: {
      problemStatement:
        "College sports fests rely on fragmented spreadsheets and messaging groups, causing scheduling clashes, disputes over rules, and delayed match results.",
      objectives: [
        "Automate tournament bracket generation for knockouts and round-robin leagues.",
        "Deliver real-time live score updates to spectators via WebSockets.",
        "Provide captain verification and team roster management.",
      ],
      myContribution: [
        "Implemented the tournament seeding and bracket progression algorithms.",
        "Built the WebSocket gateway for live score broadcast to active client connections.",
        "Created responsive match schedule grids and referee scoring interfaces.",
      ],
      architecture: {
        overview: "Event-driven full stack application with bidirectional WebSocket score push and MongoDB document store.",
        frontend: "React with modular bracket visualizer and live update indicators.",
        backend: "Node.js, Express, Socket.io server with room-based broadcast subscriptions.",
        database: "MongoDB for match state persistence, team rosters, and historical fixtures.",
      },
      engineeringDecisions: [
        {
          decision: "Room-based WebSocket channels for distinct concurrent sports courts",
          rationale: "Limits packet fan-out only to spectators currently viewing that specific match.",
          alternativeConsidered: "Global event broadcast, which generated unnecessary client network traffic.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling sudden tournament forfeits without breaking downstream bracket pointers.",
          solution: "Created an automated walkover advancement handler that gracefully updates downstream match node dependencies.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Live Update Latency",
          value: "< 80ms",
          context: "Between referee input and spectator device update via WebSockets.",
        },
      ],
      limitations: ["Media upload for tournament highlight clips is currently restricted."],
      futureImprovements: ["Automated referee assignment algorithm accounting for sport certification levels."],
    },
  },
  {
    slug: "krishimitra",
    title: "KrishiMitra",
    subtitle: "AI-Assisted Agricultural Advisory & Crop Health System",
    tagline: "Connecting smallholder farmers with localized disease diagnostics and market pricing intelligence.",
    category: "AI & Machine Learning",
    role: "ML Integrator & Frontend Developer",
    timeline: "2024",
    teamSize: "3 Members",
    status: "Hackathon Project",
    featured: false,
    summary:
      "An agricultural advisory prototype combining image-based crop disease diagnosis with regional weather forecasts and mandi market price trends to assist smallholder farmers in timely interventions.",
    technologies: ["Python", "Flask", "React", "Tailwind CSS", "Firebase", "Computer Vision"],
    githubUrl: "https://github.com/aryankelkar/krishimitra",
    caseStudy: {
      problemStatement:
        "Smallholder farmers lose an estimated 20-30% of yield to pest infestations and fungal diseases due to delayed diagnosis and lack of localized agronomic guidance.",
      objectives: [
        "Provide rapid leaf image classification for common crop leaf diseases.",
        "Deliver actionable organic and chemical remediation advice in plain language.",
        "Aggregate nearby wholesale commodity prices to improve farmer bargaining power.",
      ],
      myContribution: [
        "Built the web client with simplified camera upload workflows and high-visibility contrast controls.",
        "Constructed Flask inference wrappers connecting model predictions with advisory recommendation databases.",
        "Integrated public weather and commodity price APIs.",
      ],
      architecture: {
        overview: "Lightweight client interface communicating with a Python inference API and Firebase real-time data cache.",
        frontend: "Mobile-first React client optimized for touch interaction on low-cost smartphones.",
        backend: "Flask API with image resizing preprocessing and disease advisory lookup.",
        database: "Firebase Cloud Firestore for user query histories and advisory guides.",
      },
      engineeringDecisions: [
        {
          decision: "Client-side image downscaling prior to network transmission",
          rationale: "Enables fast uploads over spotty 2G/3G rural networks by capping uploaded image size at 600px width.",
          alternativeConsidered: "Uploading full-resolution camera photos (often 5-10MB), which regularly timed out.",
        },
      ],
      challengesAndSolutions: [
        {
          challenge: "Inconsistent lighting and background clutter in field leaf photographs.",
          solution: "Provided on-screen alignment guides and calibrated confidence threshold alerts prompting the user to retake if confidence was under 65%.",
        },
      ],
      resultsAndMetrics: [
        {
          metric: "Average Upload Payload",
          value: "~110 KB",
          context: "Reduced from original 4.8 MB camera captures via client-side Canvas downscaling.",
        },
        {
          metric: "Diagnostic Turnaround",
          value: "< 1.4s",
          context: "Total roundtrip latency from image submission to advisory display.",
        },
      ],
      limitations: [
        "Requires sufficient sunlight for clear leaf symptom classification.",
      ],
      futureImprovements: [
        "Offline on-device inference using TensorFlow Lite / ONNX Web runtime.",
      ],
    },
  },
];
