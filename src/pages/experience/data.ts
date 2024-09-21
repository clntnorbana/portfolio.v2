export type ExperiencesType = {
  job_title: string;
  company: string;
  date: string;
  description: string;
  tools: string[];
  url?: string;
};

const data: ExperiencesType[] = [
  {
    job_title: "Frontend Developer",
    company: "DigiPlus Interactive Corp.",
    date: "SEP 2024 — PRESENT",
    description: "No description yet.",
    tools: ["VueJS"],
    url: "https://digiplus.com.ph/",
  },
  {
    job_title: "Web Developer Intern",
    company: "Five Freedoms Partners Inc.",
    date: "SEP — NOV 2023",
    description:
      "Collaborated with the development team to enhance and debug the company's administrative and business websites. Responsible for translating design specifications into code, adding new features and improve functionality.",
    tools: ["PHP", "MySQL", "JQuery", "JavaScript", "HTML", "CSS"],
    url: "https://ffpi.one/",
  },
  {
    job_title: "Frontend Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    date: "FEB — MAY 2023",
    description:
      "Successfully completed the 350-hour On-The-Job course as required by my university. I take part in building the UI of the company's 'Web Based User Management System' by translating a Figma design into code.",
    tools: ["Vue", "Quasar"],
    url: "https://pixel8websolutions.com/",
  },
];

export default data;
