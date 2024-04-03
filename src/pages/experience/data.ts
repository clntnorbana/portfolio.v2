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
    job_title: "Frontend Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    date: "FEB — MAY 2023",
    description:
      "Successfully completed the 350-hour On-The-Job course as required by my university. I take part in building the UI of the company's 'Web Based User Management System' by translating a Figma design into code.",
    tools: ["Vue", "Quasar"],
    url: "https://software.pixel8.ph",
  },
  {
    job_title: "Web Developer Intern",
    company: "Five Freedoms Partners Inc.",
    date: "Sep — Nov 2023",
    description:
      "Collaborated with the development team to enhance and debug the company's administrative and business websites. Responsible for translating design specifications into code, adding new features and improve functionality.",
    tools: ["PHP", "MySQL", "JQuery", "JavaScript", "HTML", "CSS"],
    url: "https://www.google.com/search?q=five+freedom+partners&rlz=1C1KNTJ_enPH1029PH1029&oq=five+f&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIHCAEQLhiABDIGCAIQRRg5MgoIAxAuGLEDGIAEMgcIBBAuGIAEMgcIBRAAGIAEMgYIBhBFGDwyBggHEEUYPKgCALACAA&sourceid=chrome&ie=UTF-8",
  },
];

export default data;
