import { ExperiencesType } from "./data";
import { BsArrowUpRight } from "react-icons/bs";

type ExperienceDetailProps = {
  experience: ExperiencesType;
};

const ExperienceDetail = (props: ExperienceDetailProps) => {
  const { job_title, company, date, description, tools } = props.experience;

  return (
    <a href="https://software.pixel8.ph/" target="__blank">
      <div className="rounded-md transition-all md:p-5 md:hover:bg-white/25 md:hover:shadow-md md:dark:hover:bg-black/10 xl:grid xl:grid-cols-3">
        <p className="mb-2 opacity-[.5] xl:mb-0 xl:mt-1 xl:text-center">
          {date}
        </p>
        <div className="col-span-2">
          <h1 className="mb-2 text-2xl font-bold leading-7 md:text-3xl">
            {job_title}
          </h1>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold leading-3">
            {company} <BsArrowUpRight />{" "}
          </p>
          <p className="mb-3 text-sm opacity-[.7]">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => {
              return (
                <p
                  className="text rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-700"
                  key={index}
                >
                  {tool}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
};
export default ExperienceDetail;
