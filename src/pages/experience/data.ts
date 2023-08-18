export type ExperiencesType = {
  job_title: string;
  company: string;
  date: string;
  description: string;
  tools: string[];
};

const data: ExperiencesType[] = [
  {
    job_title: "Frontend Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    date: "FEB — MAY 2023",
    description:
      "Successfully completed the 350-hour On-The-Job course as required by my university. I take part in building the UI of the company's 'Web Based User Management System' by translating a Figma design into code.",
    tools: ["Vue", "Quasar"],
  },
];

export default data;
