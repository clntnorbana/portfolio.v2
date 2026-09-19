export type ExperiencesType = {
  job_title: string;
  company: string;
  date: string;
  description?: string;
  tools: string[];
  url?: string;
};

const data: ExperiencesType[] = [
  {
    job_title: "Frontend Developer",
    company: "Flexicon Solution Inc.",
    date: "DEC 2025 — PRESENT",
    description: "No description yet",
    tools: [
      "Vue",
      "Vuex",
      "TypeScript",
      "Figma",
      "BitBucket",
      "Rest API"
    ],
    url: "https://www.linkedin.com/company/flexicon-solution-inc/home/"
  },
  {
    job_title: "Frontend Developer",
    company: "Digiplus",
    date: "SEP 2024 — NOV 2025",
    description: "Developed and maintained multiple internal back-office management modules (Payment, Messaging, User Center, Marketing).",
    tools: [
      "Vue",
      "Vuex",
      "TypeScript",
      "Element UI",
      "VXE",
      "Pinia State Management",
      "REST API",
    ],
    url: "https://digiplus.com.ph/",
  },
  {
    job_title: "Fullstack Web Developer Intern",
    company: "Five Freedoms Partners Inc.",
    date: "SEP 2023 — NOV 2023",
    description:
      "Collaborated with the development team to enhance and debug the company's administrative and business websites. Responsible for translating design specifications into code, adding new features and improve functionality.",
    tools: ["PHP", "MySQL", "JQuery", "JavaScript", "HTML", "CSS"],
    url: "https://ffpi.one/",
  },
  {
    job_title: "Frontend Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    date: "FEB 2023 — MAY 2023",
    description:
      "Successfully completed the 350-hour On-The-Job course as required by my university. I take part in building the UI of the company's 'Web Based User Management System' by translating a Figma design into code.",
    tools: ["Vue", "Quasar"],
    url: "https://pixel8websolutions.com/",
  },
];

export default data;
