const image_path = "./project_img";

export type ProjectsType = {
  title: string;
  live_url: string;
  github_url?: {
    main_url?: string;
    frontend_url?: string;
    backend_url?: string;
  };
  stacks: string[];
  description?: string;
  images?: string[];
};

const data: ProjectsType[] = [
  {
    title: "Barangay Malamig Certificate Request Services System",
    live_url: "https://barangaymalamigrequestcertificate.online/",
    github_url: {
      frontend_url: "https://github.com/clntnorbana/frontend_capstone",
      backend_url: "https://github.com/clntnorbana/backend_capstone",
    },
    stacks: [
      "react",
      "typescript",
      "tailwindcss",
      "redux toolkit",
      "node",
      "express",
      "twilio",
      "cloudinary",
      "mysql",
    ],
    description:
      "Our capstone project focused on digitalizing the process for requesting and releasing certificates, such as barangay clearance and indigency. This initiative aimed to streamline operations, leading to faster transactions and improved efficiency for the Barangay Malamig Office.",
    images: [`${image_path}/capstone.png`, `${image_path}/capstone.png`],
  },
  {
    title: "T-Shirt Store",
    live_url: "https://t-shirt-store-phi.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/E-commerce-t-shirt-add-to-cart",
    },
    stacks: ["react", "css", "typescript", "redux toolkit"],
    description: "An add to cart e-commerce app with CRUD operation.",
    images: [
      `${image_path}/t_shirt_store.jpg`,
      `${image_path}/t_shirt_store_2.jpg`,
    ],
  },
  {
    title: "User Authentication",
    live_url: "https://user-authentication-kappa.vercel.app/",
    github_url: {
      frontend_url:
        "https://github.com/clntnorbana/user-authentication-form-frontend",
      backend_url:
        "https://github.com/clntnorbana/user-authentication-form-frontend",
    },
    stacks: [
      "react",
      "typescript",
      "tailwindcss",
      "node",
      "express",
      "mongodb",
      "redux toolkit",
    ],
    description:
      "A simple MERN user authentication that stores a JWT token in an HTTP-Only-Cookie.",
    images: [`${image_path}/user_auth.jpg`, `${image_path}/user_auth_2.jpg`],
  },

  {
    title: "Blog App",
    live_url: "https://blogpost-app-frontend.vercel.app/",
    github_url: {
      frontend_url: "https://github.com/clntnorbana/Blogpost-app-frontend",
      backend_url: "https://github.com/clntnorbana/Blogpost-app-server",
    },
    stacks: ["react", "css", "node", "express", "mongodb", "redux toolkit"],
    description:
      "A MERN stack application with authentication. Note: The images in this project are changing every re-render, it was the time before knowing cloud-based image/video/file management services.",
    images: [`${image_path}/blog.jpg`, `${image_path}/blog_2.jpg`],
  },
  {
    title: "Spotify Landing Page Clone",
    live_url: "https://spotify-clone-five-delta.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/Spotify-clone",
    },
    stacks: ["html", "css", "javascript"],
    description:
      "Making this project enhanced my understanding about CSS grid.",
    images: [`${image_path}/spotify.jpg`, `${image_path}/spotify_2.jpg`],
  },
  {
    title: "Nike PH Landing Page Clone",
    live_url: "https://e-commerce-seven-ochre.vercel.app/",
    github_url: {
      main_url:
        "https://github.com/clntnorbana/E-Commerce---made-with-HTML-SASS",
    },
    stacks: ["html", "sass", "javascript"],
    description:
      "A simple project to boost my CSS skill, also the first time I used SASS.",
    images: [`${image_path}/nike_clone.jpg`, `${image_path}/nike_clone_2.jpg`],
  },
  {
    title: "To do list - Typescript",
    live_url: "https://typescript-todoapp-mocha.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/typescript-todoapp",
    },
    stacks: ["typescript", "react", "css"],
    description: "My first project where I used typescript.",
    images: [`${image_path}/todolist.png`, `${image_path}/todolist.png`],
  },
  {
    title: "Personality Test",
    live_url: "https://personality-test-nwa6.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/personality-test",
    },
    stacks: ["html", "css", "typescript"],
    description:
      "When I applied to a software company, I was given a task to create a simple personality test software. I initially built it using Node.js, running entirely in the console. To make it more engaging, I later recreated it as a simple static website using TypeScript.",
    images: [
      `${image_path}/personality_test_img.png`,
      `${image_path}/personality_test_img.png`,
    ],
  },
  {
    title: "Quiz App",
    live_url: "https://typescript-quiz-app-gamma.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/typescript-quiz-app",
    },
    stacks: ["react", "typescript", "tailwindcss"],
    description:
      "The project that tested my logical skills and problem solving.",
    images: [`${image_path}/quiz.jpg`, `${image_path}/quiz_2.jpg`],
  },
  {
    title: "Calculator",
    live_url: "https://calculator-ashen-alpha.vercel.app/",
    github_url: {
      main_url: "https://github.com/clntnorbana/Calculator",
    },
    stacks: ["html", "css", "javascript"],
    description:
      "Building this calculator project gave me a solid understanding of CSS Grid.",
    images: [`${image_path}/calculator.png`, `${image_path}/calculator.png`],
  },
];

export default data;
