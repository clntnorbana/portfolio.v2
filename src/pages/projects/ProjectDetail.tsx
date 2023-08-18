import { ProjectsType } from "./data";

type ProjectDetailProps = {
  project: ProjectsType;
};

const ProjectDetail = (props: ProjectDetailProps) => {
  const { title, live_url, stacks, description, images } = props.project;

  return (
    <div className="relative overflow-hidden opacity-[.8] transition-all hover:opacity-[1]">
      <div className="mb-2">
        <p className="text-lg font-bold">{title}</p>
      </div>
      {images && images.length > 0 && (
        <a href={live_url} target="__blank">
          <img className="w-full rounded-md" src={images[0]} alt={title} />
        </a>
      )}
      <div className="p-2">
        <div className="flex flex-wrap">
          {stacks.map((stack, index) => {
            return (
              <p
                key={index}
                className="my-1 mr-2 rounded-xl bg-gray-50 px-2 text-sm text-gray-900"
              >
                {stack}
              </p>
            );
          })}
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default ProjectDetail;
