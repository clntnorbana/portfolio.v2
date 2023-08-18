type FilterProjectType = {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const FilterProject = (props: FilterProjectType) => {
  const filteringItems = [
    "html",
    "css",
    "javascript",
    "react",
    "typescript",
    "tailwindcss",
    "redux toolkit",
    "node",
    "express",
    "mongodb",
    "sass",
  ];

  return (
    <div className="flex flex-wrap gap-3 py-10">
      <button
        onClick={() => props.setSelectedItem("")}
        className={`${
          props.selectedItem === ""
            ? "bg-gray-900 text-gray-50 transition-all dark:bg-gray-500"
            : "bg-gray-50 text-gray-900"
        } rounded-full px-2 py-1 shadow-sm hover:scale-[1.15] hover:opacity-[.7]`}
      >
        all
      </button>
      {filteringItems.map((item, index) => {
        return (
          <button
            onClick={() => props.setSelectedItem(item)}
            disabled={props.selectedItem === item}
            className={`${
              props.selectedItem === item
                ? "bg-gray-900 text-gray-50 dark:bg-gray-500"
                : "bg-gray-50 text-gray-900"
            } rounded-full px-2 py-1 shadow-sm transition-all hover:scale-[1.15] hover:opacity-[.7]`}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default FilterProject;
