import {
  HiOutlineBolt,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

export const profile = {
  name: "Chetan Maheshwari",
  title: "Senior AI Software Engineer",
  headline:
    "Senior AI engineer delivering reliable products, high-impact recommendations, and autonomous agents at scale.",
  subheadline:
    "Known for leadership, management, and technical depth that helps founders ship trustworthy AI systems fast.",
  focus:
    "Scaling AI infrastructure, retrieval systems, and personalization across products and platforms.",
  availability: "Open for projects",
  stats: [
    { value: "$360k+", label: "worth AI agents/year" },
    { value: "60M+", label: "daily queries served" },
    { value: "$1M", label: "ARR impact delivered" },
  ],
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { label: "Golang + Python", icon: HiOutlineCommandLine },
  { label: "LLMs + LangChain", icon: HiOutlineCpuChip },
  { label: "AWS + GCP", icon: HiOutlineCloud },
  { label: "Realtime Systems", icon: HiOutlineBolt },
  { label: "Security + SOC 2", icon: HiOutlineShieldCheck },
  { label: "Microservices", icon: HiOutlineCube },
  { label: "API Design", icon: HiOutlineCodeBracket },
  { label: "AI Research", icon: HiOutlineSparkles },
];

export const aboutHighlights = [
  "NPTEL Discipline Star (2019) and 2nd rank in Codacharya 2020.",
  "Selected as a Google Cloud Career Readiness Student Mentor (Top 48 nationwide).",
];

export const researchSpotlight = {
  title:
    "Vision Helper: CNN Based Real-Time Navigator for the Visually Impaired",
  link: "https://doi.org/10.1007/978-3-031-11346-8_20",
  venue: "Accepted at CVIP 2021 (IIT Ropar)",
  summary:
    "Built a collision detection and navigation system using YOLOv3 + OpenCV with speech guidance for visually impaired users.",
  stack: [
    "Python",
    "Java",
    "Deep Learning",
    "OpenCV",
    "TTS",
    "GPU",
    "Google Colab",
  ],
};

export const experience = [
  {
    company: "AI Platform Leadership",
    role: "Senior AI Software Engineer",
    period: "Recent",
    impact: [
      "Led end-to-end delivery of LLM-powered products, from system design to production rollout.",
      "Architected recommendation systems that improved personalization outcomes and revenue impact ($1M+ ARR).",
      "Scaled AI services to 60M daily queries using ECS, Lambda, FastAPI, and distributed load balancing.",
      "Established evaluation pipelines, guardrails, and SOC 2-aligned safety practices for AI communications.",
    ],
  },
  {
    company: "Distributed Systems",
    role: "Senior Software Engineer",
    period: "2022 - 2024",
    impact: [
      "Built microservices, API gateways, and reliability tooling for high-traffic platforms.",
      "Delivered cloud migrations across AWS, GCP, and DigitalOcean with Kubernetes and IaC.",
      "Automated data pipelines and deployed decentralized storage networks at scale.",
    ],
  },
  {
    company: "Enterprise Systems",
    role: "Software Engineer",
    period: "2021 - 2022",
    impact: [
      "Built secure customer portals, intranet systems, and workflow automation for operations teams.",
      "Delivered cloud migrations and scalable web apps with strong security posture.",
      "Managed vendor integrations and compliance requirements for sensitive data systems.",
    ],
  },
  {
    company: "Cloud Mentorship",
    role: "Career Readiness Mentor",
    period: "2021",
    impact: [
      "Mentored students preparing for Associate Cloud Engineer certification.",
      "Selected as one of 48 mentors from 1,000 applicants.",
    ],
  },
];

export const projects = [
  {
    name: "Atlas Signal Intelligence",
    description:
      "Unified customer, product, and revenue signals into a real-time intelligence hub with automated anomaly detection.",
    stack: ["Golang", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    name: "Impulse Recommendation Core",
    description:
      "Hybrid collaborative filtering + LLM reasoning engine that boosts conversion while keeping latency under 120ms.",
    stack: ["Python", "LLMs", "Redis", "FastAPI"],
  },
  {
    name: "TrustOps AI Control Plane",
    description:
      "Governance and evaluation suite that monitors AI quality, bias, and safety with automated guardrails.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "GCP"],
  },
  {
    name: "Relay Agent Operations",
    description:
      "Autonomous agent platform for support and internal ops with human-in-the-loop review and audit trails.",
    stack: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
  },
  {
    name: "Prism Data Reliability",
    description:
      "Observability stack that traces data quality, latency, and infra costs across multi-cloud pipelines.",
    stack: ["Go", "Terraform", "Prometheus", "AWS"],
  },
];

export const testimonials = [
  {
    quote:
      "Chetan was awesome. Solved my issue quickly and professionally. Highly recommend!",
    name: "@clarityops01",
    title: "Client",
    company: "Replit",
    date: "Jun 7, 2025",
  },
  {
    quote:
      "Chetan was great and found an issue that I spent a week spinning my wheels over. Wish I would have found him earlier.",
    name: "@jeff231",
    title: "Client",
    company: "Replit",
    date: "Jan 28, 2025",
  },
  {
    quote:
      "Super easy to work with and quick work. Will look forward to working together again.",
    name: "@flowcoco",
    title: "Client",
    company: "Replit",
    date: "Nov 5, 2024",
  },
  {
    quote: "Great work and fast turnaround. Solved the issue!",
    name: "@JustinW20",
    title: "Client",
    company: "Replit",
    date: "Jun 30, 2024",
  },
  {
    quote: "will use again. excellent",
    name: "@3Bil",
    title: "Client",
    company: "Replit",
    date: "Jun 6, 2024",
  },
  {
    quote: "Great work! Very fast and able to implement a complex update!",
    name: "@PeterBergin",
    title: "Client",
    company: "Replit",
    date: "Apr 1, 2024",
  },
  {
    quote: "Quick and professional! No complaints.",
    name: "@SeaStrider",
    title: "Client",
    company: "Replit",
    date: "Mar 14, 2024",
  },
  {
    quote: "Great stuff ... trying to write some more",
    name: "@werdelin",
    title: "Client",
    company: "Replit",
    date: "Feb 22, 2024",
  },
  {
    quote:
      "he was great, really good communication and took the time needed to get the job done.",
    name: "@JohnH31",
    title: "Client",
    company: "Replit",
    date: "Jan 2, 2024",
  },
  {
    quote:
      "The work was delivered on time and with good quality. Overall, good experience.",
    name: "@tekstai",
    title: "Client",
    company: "Replit",
    date: "Oct 31, 2023",
  },
  {
    quote: "GREAT! job!! Easy to work with and a good communicator!",
    name: "@firewalkerml",
    title: "Client",
    company: "Replit",
    date: "Oct 13, 2023",
  },
  {
    quote:
      "Great job by Chetan. He worked quickly and also provided very useful explanation videos. Looking forward to work with him again in the future!",
    name: "@urm3l",
    title: "Client",
    company: "Replit",
    date: "Sep 26, 2023",
  },
  {
    quote: "Great work, very fast and knowledgable",
    name: "@mancinisimone",
    title: "Client",
    company: "Replit",
    date: "Sep 18, 2023",
  },
  {
    quote:
      "Great to work with and great communication, fast on time delivery of the project to requirements. Went above and beyond to help.",
    name: "@tcbai",
    title: "Client",
    company: "Replit",
    date: "Aug 22, 2023",
  },
  {
    quote: "It was great to work with him as always :)",
    name: "@AbhayBhargav1",
    title: "Client",
    company: "Replit",
    date: "Aug 6, 2023",
  },
  {
    quote: "Fast responses. Cooperative. Good deliverable. Recommended.",
    name: "@ArturoOjeda",
    title: "Client",
    company: "Replit",
    date: "Jul 24, 2023",
  },
  {
    quote:
      "Chetan's work on our app? Outstanding. His Python skills? Top-notch. Database know-how? Excellent. Chetan doesn't just do his job - he excels. He's a learning machine, always up-to-speed with the latest in Machine Learning. It's not just about the tech, though. Chetan brings heart to our team. He's there for stand-ups, ready to help, always communicating. Patience is his virtue, but dedication is his hallmark. Chetan doesn't just work hard, he works smart. He's an asset, no doubt. Can't wait to see what he does next! I'd recommend him in a heartbeat.",
    name: "@prnyc",
    title: "Client",
    company: "Replit",
    date: "May 29, 2023",
  },
  {
    quote: "He calls himself, The Best. He might be right.",
    name: "@luiscalderon19",
    title: "Client",
    company: "Replit",
    date: "Apr 20, 2025",
  },
  {
    quote:
      "Great to work with and very responsive. Provides good work all around.",
    name: "@PMCOAutomation",
    title: "Client",
    company: "Replit",
    date: "Nov 17, 2024",
  },
  {
    quote: "Great communication and execution!",
    name: "@flashmar",
    title: "Client",
    company: "Replit",
    date: "Sep 4, 2024",
  },
  {
    quote:
      "did really good! made the changes according to me and was flexible with additional stuff as well!",
    name: "@charles2h9t",
    title: "Client",
    company: "Replit",
    date: "Jun 17, 2024",
  },
  {
    quote:
      "Chetan delivered on time and with great quality, very happy with his work!",
    name: "@juancaruiz",
    title: "Client",
    company: "Replit",
    date: "May 12, 2024",
  },
  {
    quote: "Great job as usual, would work with him again in the future!",
    name: "@urm3l",
    title: "Client",
    company: "Replit",
    date: "Mar 18, 2024",
  },
  {
    quote: "Chetan was great to work with! Really communicative and expert",
    name: "@ednavas4",
    title: "Client",
    company: "Replit",
    date: "Mar 10, 2024",
  },
  {
    quote: "was fantastic to work with him!",
    name: "@JohnH31",
    title: "Client",
    company: "Replit",
    date: "Feb 20, 2024",
  },
  {
    quote: "Great work ! thank you Exotic",
    name: "@NFtalk",
    title: "Client",
    company: "Replit",
    date: "Dec 21, 2023",
  },
  {
    quote:
      "Chetan solved a problem for me in Python and Selenium. He was extremely quick (provided a solution in less than 10 minutes). Definitely recommend Chetan! Thank you.",
    name: "@ZipRat",
    title: "Client",
    company: "Replit",
    date: "Oct 17, 2023",
  },
  {
    quote: "Hope to work with @CHETANMAHESHWA1 again",
    name: "@sebasi3",
    title: "Client",
    company: "Replit",
    date: "Sep 30, 2023",
  },
  {
    quote:
      "Was great to work with found implementation issue quickly and efficiently",
    name: "@AnnaLopez1",
    title: "Client",
    company: "Replit",
    date: "Sep 22, 2023",
  },
  {
    quote:
      "Took a few tries to get the job done, but the corrections requested were always swiftly completed. The user remained friendly throughout the entire job and seemed to have learned a lot.",
    name: "@LZulb",
    title: "Client",
    company: "Replit",
    date: "Aug 23, 2023",
  },
  {
    quote:
      "This guy was fantastic. He accomplished everything i needed from him and was very patient at explaining technical things that were over my head and working with me on finding solutions to address my needs. i will for sure be using him on future projects.",
    name: "@jesse33",
    title: "Client",
    company: "Replit",
    date: "Aug 14, 2023",
  },
  {
    quote: "Great work done. Reconmend",
    name: "@AbhayBhargav1",
    title: "Client",
    company: "Replit",
    date: "Jul 25, 2023",
  },
  {
    quote: "It was fun working with Chetan. He quickly resolved this issue.",
    name: "@nkamidi",
    title: "Client",
    company: "Replit",
    date: "Jul 21, 2023",
  },
  {
    quote: "Good quality work, with smooth and polite communication!",
    name: "@paulrobertdoher",
    title: "Client",
    company: "Replit",
    date: "May 6, 2023",
  },
];

export const ratingsOverview = {
  score: "4.89",
  total: "61 reviews",
  categories: [
    { label: "Quality of work", score: "4.9" },
    { label: "Clarity of requirements", score: "4.9" },
    { label: "Communication", score: "4.9" },
    { label: "Professionalism", score: "4.9" },
    { label: "Attention to detail", score: "4.9" },
    { label: "Responsiveness", score: "4.9" },
  ],
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chetan-maheshwari-125aa4184/",
  },
  { label: "Medium", href: "https://medium.com/@radientbrain" },
];

export const chatDemo = [
  {
    role: "user",
    message: "Summarize the top inventory gaps across our dealer network.",
  },
  {
    role: "assistant",
    message:
      "The largest gaps are mid-range SUVs in the Midwest and EV inventory in California. I can generate replenishment recommendations by dealer.",
  },
  {
    role: "user",
    message: "Draft a dealer outreach message with those insights.",
  },
  {
    role: "assistant",
    message:
      "Subject: Inventory insights for your region — We spotted demand spikes for mid-range SUVs and EVs. Want a tailored replenishment plan for the next 30 days?",
  },
];
