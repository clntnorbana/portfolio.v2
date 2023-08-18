import { useEffect, useState } from "react";
import data, { ProjectsType } from "./data";
import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";
import FilterProject from "./FilterProject";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
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
        delay: 0.2,
      }}
      className="mt-[-50px] md:mt-0"
    >
      {/* This component contains buttons that will filter projects */}
      <FilterProject
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      <div className="my-5 flex justify-end">
        <a
          className="flex items-center gap-1 text-blue-500 underline transition-all hover:gap-3 hover:text-blue-400"
          href="https://github.com/clntnorbana"
          target="__blank"
        >
          View more on GitHub
          <BsArrowRight />
        </a>
      </div>

      {/* render projects */}
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
          delay: 0.5,
        }}
        className="grid gap-5 pb-20 md:grid-cols-2"
      >
        {projects
          .filter((project) => {
            return selectedItem === ""
              ? true
              : project.stacks.includes(selectedItem);
          })
          .map((project, index) => {
            return <ProjectDetail key={index} project={project} />;
          })}
      </motion.div>
    </motion.div>
  );
};
export default Projects;
