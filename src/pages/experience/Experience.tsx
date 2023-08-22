import { useEffect, useState } from "react";
import data, { ExperiencesType } from "./data";
import { motion } from "framer-motion";
import ExperienceDetail from "./ExperienceDetail";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperiencesType[]>([]);

  useEffect(() => {
    setExperiences(data);
  }, []);

  return (
    <div className="w-full lg:ml-16 lg:mt-28">
      <motion.div
        initial={{
          opacity: 0,
          y: 5,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.1,
        }}
        className="grid grid-cols-1"
      >
        {experiences &&
          experiences.map((experience, index) => {
            return <ExperienceDetail key={index} experience={experience} />;
          })}
      </motion.div>
    </div>
  );
};
export default Experience;
