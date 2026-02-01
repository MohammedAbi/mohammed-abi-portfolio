import imgP1 from "../assets/image-p1.png";
import imgP2 from "../assets/image-p2.png";
import imgP3 from "../assets/image-p3.png";
import imgP4 from "../assets/image-p4.png";
import imgP5 from "../assets/image-p5.png";
import imgP6 from "../assets/image-p6.png";
import imgP7 from "../assets/image-p7.png";
import imgP8 from "../assets/image-p8.png";
import imgP9 from "../assets/image-p9.png";

const projects = [
  {
    id: 1,
    name: "Rainy Days",
    type: "School Project",
    image: imgP1,
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi",
    liveDemo: "https://js-1-course-assignment-mohammedabi.netlify.app/",
    problem:
      "Practice creating a fully dynamic online store that fetches product data from an API, allowing users to browse items, add them to a basket, and complete checkout.",
    solution:
      "Implemented interactive features such as product filtering, dynamic display, basket management, and order confirmation. Focused on clean, maintainable code, accessibility, and async API handling.",
    whatIDid: [
      "Built dynamic product filtering and basket management",
      "Implemented async API calls to fetch products",
      "Ensured accessibility and semantic HTML",
    ],
  },
  {
    id: 2,
    name: "Community Science Museum",
    type: "School Project",
    image: imgP2,
    technologies: ["HTML", "CSS", "Figma"],
    github: "https://github.com/MohammedAbi/Semester-Project-1",
    liveDemo: "https://communitysciencemuseum-mohammedabi.netlify.app/",
    problem:
      "Create an interactive educational website for children and families, following a professional brief within a set timeframe.",
    solution:
      "Combined web design, project planning, and frontend development to deliver a responsive, accessible, and visually engaging website.",
    whatIDid: [
      "Implemented navigation and interactive elements",
      "Maintained design consistency with Figma prototypes",
      "Ensured semantic HTML, responsiveness, and accessibility best practices",
    ],
  },
  {
    id: 3,
    name: "EchoPost",
    type: "School Project",
    image: imgP3,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NoroffFEU/FED1-PE1-MohammedAbi",
    liveDemo: "https://echopost.netlify.app/",
    problem:
      "Design a responsive blog web app allowing public users to view posts and admin users to manage content via API.",
    solution:
      "Created a responsive, interactive blog interface. Implemented API interactions (GET, POST, PUT, DELETE) and user authentication for admin functions.",
    whatIDid: [
      "Developed user stories for public and admin users",
      "Implemented login, registration, post creation, editing, and deletion",
      "Focused on accessibility, semantic HTML, and best practices",
    ],
  },
  {
    id: 4,
    name: "Currency Converter App",
    type: "Hobby Project",
    image: imgP4,
    technologies: ["React", "Tailwind CSS", "Frankfurter API"],
    github:
      "https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS",
    liveDemo: "https://currency-converter-application-cca.netlify.app/",
    problem:
      "Users need a quick tool to convert currencies in real-time without external websites.",
    solution:
      "Built a responsive React app with Tailwind CSS using the Frankfurter API. Added currency favoriting, swap feature, and input validation.",
    whatIDid: [
      "Created a React component structure with state management",
      "Integrated Frankfurter API for real-time conversions",
      "Styled the interface using Tailwind CSS",
    ],
  },
  {
    id: 5,
    name: "Travel Agency Website",
    type: "Hobby Project / Full-Stack",
    image: imgP5,
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/MohammedAbi/Travel-Agency-full-stack",
    liveDemo: "https://travel-agency-full-stack-am.netlify.app/",
    problem:
      "Users want an intuitive platform to explore travel destinations and services in one place.",
    solution:
      "Full-stack React frontend and Node.js/Express backend. API endpoints provide destinations, services, and testimonials. Styled with Tailwind CSS.",
    whatIDid: [
      "Developed frontend with React and Vite",
      "Built backend API with Node.js/Express",
      "Integrated frontend with API endpoints and styled UI using Tailwind CSS",
    ],
  },
  {
    id: 6,
    name: "Weather App",
    type: "Hobby Project / Frontend",
    image: imgP6,
    technologies: ["React", "Tailwind CSS", "OpenWeatherMap API", "Vite"],
    github: "https://github.com/MohammedAbi/Weather-app-react-tailwind",
    liveDemo: "https://weather-app-react-tailwind-es6.netlify.app/",
    problem:
      "Quick access to current and upcoming weather forecasts for any location.",
    solution:
      "Built a responsive weather app in React fetching real-time data and 4-day forecast from OpenWeatherMap API.",
    whatIDid: [
      "Integrated OpenWeatherMap API for live weather data",
      "Implemented search functionality for locations",
      "Styled app with Tailwind CSS for responsiveness",
    ],
  },
  {
    id: 7,
    name: "Social Media Application",
    type: "School Project",
    image: imgP7,
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Vitest",
      "Noroff API",
    ],
    github: "https://github.com/MohammedAbi/css-framework",
    liveDemo: "https://sma-social-media-application-2.netlify.app/",
    problem:
      "Build a client-side social media platform with CRUD operations and user interaction.",
    solution:
      "Created responsive social media app with posts, reactions, and user authentication using the Noroff API.",
    whatIDid: [
      "Implemented CRUD for posts and user authentication",
      "Added emoji reactions and search/sort features",
      "Tested app using Vitest",
    ],
  },
  {
    id: 8,
    name: "Flow State Todo App",
    type: "Hobby Project",
    image: imgP8,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MohammedAbi/Flow-State-Todo-App",
    liveDemo: "https://flow-state-todo-app.netlify.app/",
    problem:
      "Design a task management app to help users maximize productivity based on flow state theory.",
    solution:
      "Implemented categorized tasks, completion tracking, and a responsive design using HTML, CSS, and JS.",
    whatIDid: [
      "Categorized tasks by difficulty and flow state",
      "Implemented task CRUD operations",
      "Added progress bar and responsive design",
    ],
  },
  {
    id: 9,
    name: "VivaTrend Store",
    type: "Hobby Project",
    image: imgP9,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router DOM",
      "React Toastify",
      "Swiper.js",
    ],
    github: "https://github.com/MohammedAbi/vivatrend-store",
    liveDemo: "https://vivatrend-store.netlify.app",
    problem:
      "Build a responsive e-commerce front-end for browsing, cart management, and checkout.",
    solution:
      "Mobile-first online store using React, TypeScript, Tailwind CSS. Implemented registration, login, cart, and checkout flow. Deployed on Netlify.",
    whatIDid: [
      "Developed React + TypeScript components for products and cart",
      "Integrated user authentication with Noroff API",
      "Implemented checkout flow and toast notifications",
    ],
  },
];

export default projects;
