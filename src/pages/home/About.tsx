import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineMail,
} from "react-icons/ai";
import resumePdf from "/file/Clinton_Orbana.pdf";

const About = () => {
  return (
    <>
      <div className="mb-5 flex flex-col items-center">
        <div className="mb-3 w-[6rem] overflow-hidden rounded-full border-[.23rem] border-gray-50">
          <img loading="lazy" src="./profile_pic.jpg" alt="clinton orbaña" />
        </div>
        <p className="mb-5 text-center text-lg">
          <span className="font-semibold">
            Hello, I'm <span className="text-blue-800">Clinton Orbaña</span>.
          </span>{" "}
          I am an <span className="font-semibold">IT student</span> and a{" "}
          <span className="font-semibold">self-taught web developer.</span> I
          enjoy building sites & apps. My focus is{" "}
          <span className="font-semibold underline">
            Front-End Development.
          </span>
        </p>
        <div className="mb-10 flex flex-col items-center gap-3 lg:flex-row">
          <button
            onClick={() => window.open(resumePdf)}
            className="flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-2 text-sm font-bold text-gray-50 transition-all hover:scale-[1.1] hover:opacity-50"
          >
            Download Resume{" "}
            <i className="text-lg">
              <AiOutlineDownload />
            </i>
          </button>
          <a
            href="mailto:rbnclntn@gmail.com"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-50 px-5 py-2 text-center text-sm font-bold text-gray-900 transition-all hover:scale-[1.1] hover:opacity-50"
          >
            Contact Me
            <i className="text-lg">
              <AiOutlineMail />
            </i>
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/clntnorbana"
              target="__blank"
              className="rounded-full bg-gray-900 p-[.3rem] text-2xl text-gray-50 transition-all hover:scale-[1.1] hover:opacity-50 dark:bg-gray-50 dark:text-gray-900"
            >
              {" "}
              <AiFillGithub />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/clinton-orbana-925859249/"
              target="__blank"
              className="rounded-full bg-gray-900 p-[.3rem] text-2xl text-gray-50 transition-all hover:scale-[1.1] hover:opacity-50 dark:bg-gray-50 dark:text-gray-900"
            >
              {" "}
              <AiFillLinkedin />{" "}
            </a>
            <a
              href="https://www.facebook.com/klennnn"
              target="__blank"
              className="rounded-full bg-gray-900 p-[.3rem] text-2xl text-gray-50 transition-all hover:scale-[1.1] hover:opacity-50 dark:bg-gray-50 dark:text-gray-900"
            >
              {" "}
              <AiFillFacebook />{" "}
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-justify text-gray-600 dark:text-gray-300">
          Web development caught my interest when I created a simple web page
          using Wix and Wordpress when I was on my first year in college, and
          decided to pursue my passion for programming. I have spent plenty of
          time watching tutorials, reading documentation, writing codes and
          building personal projects. My favorite part of programming is being
          able to make the computer do what I want. My core stack is{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-50">
            HTML, CSS, JavaScript and React.
          </span>{" "}
          I am also familiar with{" "}
          {/* <span className="font-semibold text-gray-900 dark:text-gray-50"> */}
          Typescript, Nodejs, MongoDB and REST API.
          {/* </span> */}
        </p>
      </div>
    </>
  );
};
export default About;
