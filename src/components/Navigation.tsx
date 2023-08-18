import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navigation = () => {
  const links = [
    {
      path: "/",
      name: "about",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/experience",
      name: "experience",
    },
  ];

  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);

  const handleToggleMobileMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  return (
    <>
      <button
        onClick={handleToggleMobileMenu}
        className="absolute left-5 top-5 z-20 text-3xl text-gray-900 dark:text-gray-50 lg:hidden"
      >
        {activeMobileMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <nav
        className={`${
          activeMobileMenu
            ? "left-0 bg-gray-50 opacity-[1] dark:bg-gray-900"
            : "left-[-150%]"
        } fixed z-10 flex h-screen w-[100%] items-center justify-center gap-5 p-[2rem] font-semibold text-gray-900 transition-all dark:text-gray-50 md:w-[50%] lg:left-0 lg:w-[20%] lg:bg-transparent`}
      >
        <ul className="flex flex-col gap-3 uppercase">
          {links.map((link, index) => {
            return (
              <NavLink
                onClick={() => setActiveMobileMenu(false)}
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? `${
                        activeMobileMenu
                          ? ""
                          : "fixed top-[35%] text-4xl transition-all duration-500"
                      } opacity-100`
                    : "opacity-50 hover:opacity-70"
                }
              >
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
