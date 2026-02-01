import imgP1 from "../assets/image-p1.png";
import imgP2 from "../assets/image-p2.png";
import imgP3 from "../assets/image-p3.png";
// import imgP4 from "../assets/image-p4.png";
// import imgP5 from "../assets/image-p5.png";
// import imgP6 from "../assets/image-p6.png";
import imgP7 from "../assets/image-p7.png";
// import imgP8 from "../assets/image-p8.png";
import imgP9 from "../assets/image-p9.png";
import imgHolidaze from "../assets/image-holidaze.png";

const projects = [
  {
    id: 1,
    name: "Holidaze",
    type: "Exam Project",
    image: imgHolidaze,
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Vitest",
      "Playwright",
      "Noroff API",
    ],
    github: "https://github.com/MohammedAbi/project-exam-2",
    liveDemo: "https://noroff-project-exame-2-holidaze.netlify.app/",
    problem:
      "Create a modern vacation booking platform where users can browse venues, manage bookings, and venue managers can manage listings.",
    solution:
      "Built a fully responsive React application with role-based functionality and comprehensive testing.",
    whatIDid: [
      "Implemented authentication and role-based access",
      "Integrated booking calendars and availability",
      "Added unit and E2E tests",
    ],
    feedback:
      "Grade C: Great execution, core requirements fulfilled, some improvements possible.",
  },
  {
    id: 2,
    name: "VivaTrend Store",
    type: "School Project",
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
    problem: "Build a responsive e-commerce front-end with cart and checkout.",
    solution:
      "Mobile-first online store with authentication and full checkout flow.",
    whatIDid: [
      "Built React + TypeScript components",
      "Implemented cart and checkout logic",
      "Added toast notifications",
    ],
    feedback:
      "Passed ✅ Excellent execution, aligned perfectly with assignment criteria.",
  },
  {
    id: 3,
    name: "EchoPost",
    type: "Exam Project",
    image: imgP3,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/NoroffFEU/FED1-PE1-MohammedAbi",
    liveDemo: "https://echopost.netlify.app/",
    problem: "Create a blog app with admin-controlled content via API.",
    solution: "Responsive blog with full CRUD and authentication.",
    whatIDid: [
      "Implemented API CRUD operations",
      "Built admin login and post management",
      "Focused on accessibility",
    ],
    feedback:
      "Grade A (100/100) – Outstanding planning, UX, and coding best practices.",
  },
  {
    id: 4,
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
    problem: "Build a client-side social media platform with CRUD features.",
    solution: "Responsive app with posts, reactions, and authentication.",
    whatIDid: [
      "Implemented post CRUD",
      "Added reactions and search",
      "Tested using Vitest",
    ],
    feedback: "Solid execution, satisfied most criteria.",
  },
  {
    id: 5,
    name: "Community Science Museum",
    type: "Semester Project",
    image: imgP2,
    technologies: ["HTML", "CSS", "Figma"],
    github: "https://github.com/MohammedAbi/Semester-Project-1",
    liveDemo: "https://communitysciencemuseum-mohammedabi.netlify.app/",
    problem: "Create an educational website for children and families.",
    solution: "Responsive, accessible site following a professional brief.",
    whatIDid: [
      "Implemented navigation and layout",
      "Followed Figma designs",
      "Ensured semantic HTML",
    ],
    feedback: "Grade A (92/100) – Well executed educational project.",
  },
  {
    id: 6,
    name: "Rainy Days",
    type: "School Project",
    image: imgP1,
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi",
    liveDemo: "https://js-1-course-assignment-mohammedabi.netlify.app/",
    problem: "Build a dynamic online store using an API.",
    solution: "Implemented product filtering, basket, and checkout flow.",
    whatIDid: [
      "Built basket management",
      "Fetched products via API",
      "Focused on accessibility",
    ],
    feedback: null,
  },

  // Optional / secondary projects
  // {
  //   id: 7,
  //   name: "Currency Converter App",
  //   type: "Hobby Project",
  //   image: imgP4,
  //   technologies: ["React", "Tailwind CSS", "Frankfurter API"],
  //   github:
  //     "https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS",
  //   liveDemo: "https://currency-converter-application-cca.netlify.app/",
  // },
  // {
  //   id: 8,
  //   name: "Weather App",
  //   type: "Hobby Project",
  //   image: imgP6,
  //   technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
  //   github: "https://github.com/MohammedAbi/Weather-app-react-tailwind",
  //   liveDemo: "https://weather-app-react-tailwind-es6.netlify.app/",
  // },
  // {
  //   id: 9,
  //   name: "Flow State Todo App",
  //   type: "Hobby Project",
  //   image: imgP8,
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/MohammedAbi/Flow-State-Todo-App",
  //   liveDemo: "https://flow-state-todo-app.netlify.app/",
  // },
  // {
  //   id: 10,
  //   name: "Travel Agency Website",
  //   type: "Hobby Project / Full-Stack",
  //   image: imgP5,
  //   technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
  //   github: "https://github.com/MohammedAbi/Travel-Agency-full-stack",
  //   liveDemo: "https://travel-agency-full-stack-am.netlify.app/",
  // },
];

export default projects;
// 1. Hi ![](https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif)My name is Mohammed Abi
// 2. ====================================================================================================================================
// 3. 
// 4. Frontend Developer
// 5. ------------------
// 6. 
// 7. I'm Mohammed Abdul Abi, graduated with a Higher Professional Degree in Front-End Development from NorOff Education AS. I also hold a Master’s in Synthetic Organic Chemistry from the Norwegian University of Life Sciences, where I developed strong analytical and problem-solving skills. After working as a chemist, I found my true passion in web development. For the past 2-3 years, I’ve been learning and practicing HTML, CSS, and JavaScript, and I’m eager to keep improving and learning more. I’d love the opportunity to connect and discuss how I can contribute to your team while continuing to grow as a front-end developer.
// 8. 
// 9. * 🌍 Based in Stavanger, Norway  
// 10. 🖥️ View my portfolio: https://app.netlify.com/teams/mohammedabi/sites  
// 11. 💼 Explore all my projects: https://mohammedabi.github.io/mohammed-abi-portfolio/  
// 12. ✉️ Contact me: mohammedabdulabi@gmail.com
// 13. 
// 14. * 🚀  I'm currently working on [Completing all the projects in my front-end development education, while also working on some personal side projects to further enhance my skills and creativity.](http://app.netlify.com/teams/mohammedabi/sites)
// 15. * 🧠  I'm learning advanced JavaScript, modern frameworks, and improving responsive design, accessibility, and performance optimization for user-friendly web applications.
// 16. * 🤝  I'm open to collaborating on Here’s a shorter version: I’m open to collaborating on front-end projects involving API integration, database interaction, and dynamic, data-driven web applications that enhance user experiences through seamless front-end and back-end communication.
// 17. * ⚡  I left a well-paying career in chemistry to pursue my passion for front-end development. I’m committed to learning and growing in this field, and I hope to work with companies that value dedication and passion while allowing me to contribute and evolve as a developer.
// 18. 
// 19. 
// 20. ## 🌐 My Netlify Projects Showcase
// 21. - [Explore My Netlify Projects](https://app.netlify.com/teams/mohammedabi/sites)
// 22. 
// 23. 
// 24. # Agency 2 – MMF Project (Noroff FED2-24)
// 25. 
// 26. ## 📌 Overview
// 27. 
// 28. This project was part of the **Agency 2 course assignment (FM2AJA205)**, where we worked in a Scrum team of 8 students to build the MMF platform.  
// 29. I contributed as a **Developer**, focusing on implementing new features, collaborating with designers & QA, and following Agile practices.
// 30. 
// 31. ## 🚀 My Role & Contributions
// 32. 
// 33. - Implemented **Impact of Contributions Section** for displaying project impact.
// 34. - Added a **Reusable SubmitButton** component with async loading and success states.
// 35. - Wrote maintainable, modular code using React and API services.
// 36. - Worked closely with QA to fix bugs and ensure smooth delivery.
// 37. - Participated in sprint planning, daily standups, and retrospectives.
// 38. 
// 39. ## 🏆 Grading & Instructor Feedback
// 40. 
// 41. ✅ **Graded: Passed**
// 42. 
// 43. > “Code is good but shows minor inconsistencies. Completes assigned features on time with full functionality, and works closely with designers and QA to ensure high-quality implementation… Demonstrates highly innovative approaches to solving project challenges.”
// 44. 
// 45. ## 🔗 Links
// 46. 
// 47. - **GitHub Repository**: [Agency 2 – MMF Project](https://github.com/MohammedAbi/agency-2-reflection)
// 48. 
// 49. 
// 50. 
// 51. 
// 52. 
// 53. 
// 54. # JavaScript Frameworks: VivaTrend Store
// 55. 
// 56. ## Product Showcase
// 57. 
// 58. ![VivaTrend UI](https://github.com/user-attachments/assets/d314bff8-afa1-4f87-a058-5255a3b36080)
// 59. 
// 60. This image gives a glimpse into the VivaTrend fashion store's user interface, featuring a modern, minimal, and mobile-first design. The application leverages Tailwind CSS for responsiveness and clean layouts, providing an optimal shopping experience on all devices.
// 61. 
// 62. ## Description
// 63. 
// 64. VivaTrend is a front-end e-commerce application where users can browse fashion products, view details, add items to a cart, and complete checkout. Users can also register, log in, and access a personalized profile. The app integrates with Noroff’s public API to fetch products and handle authentication.
// 65. 
// 66. ## Features
// 67. 
// 68. - **User Registration & Login**: Authenticated user experience using Noroff API
// 69. - **Product Listings**: Browse a grid of products with filtering and search
// 70. - **Product Detail Page**: View product info, select color and size, and add to cart
// 71. - **Cart Page**: Update quantities, remove items, and view totals
// 72. - **Checkout Success Page**: Displays confirmation after completing purchase
// 73. - **User Profile**: View personal information and manage session
// 74. - **Search & Filter**: Find products by title or category
// 75. - **Contact Form**: Fully validated form for user communication
// 76. - **Toast Notifications**: Alerts for actions like login, add to cart, and logout
// 77. - **Responsive Design**: Built with Tailwind CSS and mobile-first principles
// 78. 
// 79. ## Technologies Used
// 80. 
// 81. - React 18
// 82. - Vite
// 83. - TypeScript
// 84. - Tailwind CSS
// 85. - React Router DOM
// 86. - React Toastify
// 87. - Swiper.js
// 88. - Vitest
// 89. - React Testing Library
// 90. 
// 91. ## Test User
// 92. 
// 93. For demonstration purposes, you can use the following credentials:
// 94. 
// 95. - **Email**: `bulibuli@stud.noroff.no`
// 96. - **Password**: `bulibuli`
// 97. 
// 98. ## Links
// 99. 
// 100. - **Live Website**: [https://vivatrend-store.netlify.app](https://vivatrend-store.netlify.app)
// 101. - **GitHub Repository**: [https://github.com/MohammedAbi/vivatrend-store](https://github.com/MohammedAbi/vivatrend-store)
// 102. 
// 103. 
// 104. 
// 105. # Semester Project 2: Auction Website
// 106. 
// 107. ## Product Showcase
// 108. 
// 109. ![Image](https://github.com/user-attachments/assets/ac151289-57e3-4644-b4ee-0c998afe3e39)
// 110. This image provides a glimpse of the auction website's user interface, showcasing how users can interact with the platform, browse listings, and place bids. The design follows modern web standards with a clean, user-friendly layout using TailwindCSS, offering a seamless experience for both mobile and desktop users.
// 111. 
// 112. ## Description
// 113. 
// 114. This project is a front-end application for an auction website where users can list and bid on items. It interfaces with an existing API to manage auction data, such as creating listings, placing bids, and managing user profiles.
// 115. 
// 116. ## Features
// 117. 
// 118. - **User Registration & Login**: Registered users can sign in and manage their profile.
// 119. - **Item Listings**: Users can create listings with titles, descriptions, media, and deadlines.
// 120. - **Bidding**: Registered users can place bids on items listed by others.
// 121. - **User Profile**: Registered users can update their avatar and view their total credits.
// 122. - **Search Bar**: Users can search for listings efficiently.
// 123. 
// 124. ## Technologies Used
// 125. 
// 126. - React
// 127. - Vite (build tool)
// 128. - TailwindCSS (CSS framework)
// 129. - ESLint (for linting)
// 130. - PostCSS (CSS processing)
// 131. - React Router DOM (for routing)
// 132. 
// 133. 
// 134. ## Test User
// 135. 
// 136. For testing purposes, you can use the following credentials for email and password:
// 137. 
// 138. Email:
// 139. 
// 140. ```bash
// 141. student27006@stud.noroff.no
// 142. ```
// 143. 
// 144. Password:
// 145. 
// 146. ```bash
// 147. student27006
// 148. ```
// 149. 
// 150. ## Feedback & Grading
// 151. 
// 152. ### Grade: **B**
// 153. 
// 154. ### Teacher's Feedback:
// 155. Dear Mohammed,
// 156. 
// 157. I acknowledge your Semester Project 2 work. Getting through this assignment shows real dedication.
// 158. 
// 159. Brilliant achievement in your Semester Project 2 assignment! Your work satisfied most criteria flawlessly. Keep up this standard!
// 160. 
// 161. 
// 162. 
// 163. ## Links
// 164. 
// 165. - **Hosted On Netlify**: [View Live website](https://semester-project-2-auction.netlify.app/)
// 166. - **GitHub Repository**: [View Repo](https://github.com/MohammedAbi/Semester-Project-2-auction/tree/main)
// 167. 
// 168. 
// 169. 
// 170. 
// 171. # Currency Converter App
// 172. 
// 173. <img width="1508" alt="Image" src="https://github.com/user-attachments/assets/3a076b34-689c-4c7c-8b81-228bc24157a8" />
// 174. The image displays the user interface of a sleek and functional Currency Converter App, The interface is clean, user-friendly, and focused on providing a seamless experience for users needing quick currency conversion.
// 175. 
// 176. A simple currency converter built with React.js and styled using Tailwind CSS. This app fetches the current exchange rates and allows users to convert between currencies.
// 177. 
// 178. ## Features
// 179. 
// 180. - **Real-time currency conversion**: Fetches live exchange rates and converts amounts between different currencies.
// 181. - **Favorite currencies**: Users can mark currencies as favorites for quicker access.
// 182. - **Swap currencies**: Easily swap the source and destination currencies.
// 183. - **Amount input**: Users can input the amount they want to convert.
// 184. 
// 185. ## Technologies Used
// 186. 
// 187. - **React**: JavaScript library for building user interfaces.
// 188. - **Tailwind CSS**: Utility-first CSS framework for styling the app.
// 189. - **Frankfurter API**: API used for currency conversion and fetching available currencies.
// 190. 
// 191. **Hosted On netlify:**  
// 192. [Currency Converter App](https://currency-converter-application-cca.netlify.app/)
// 193. 
// 194. **GitHub Repository:**  
// 195. [GitHub repo](https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS)
// 196. 
// 197. 
// 198. # Travel Agency Website
// 199. <img width="1510" alt="Image" src="https://github.com/user-attachments/assets/a7296883-90ab-4792-aaec-f95ce054c925" />
// 200. The image displays the user interface of a full-stack travel agency website, The interface is clean & user-friendly.
// 201. 
// 202. This is a full-stack travel agency website built with React for the frontend and Node.js/Express for the backend. It provides an intuitive platform for booking various travel services, exploring popular destinations, and viewing customer testimonials.
// 203. 
// 204. ## Features
// 205. 
// 206. - **Frontend**:
// 207. 
// 208.   - Built with React and Vite for fast development.
// 209.   - Displays popular travel destinations and services.
// 210.   - Fetches data for destinations and testimonials from the backend.
// 211.   - TailwindCSS for styling and responsive design.
// 212. 
// 213. - **Backend**:
// 214.   - Express-based API server.
// 215.   - Provides endpoints to fetch popular destinations and testimonials.
// 216. 
// 217. 
// 218. This is a full-stack travel agency website built with React for the frontend and Node.js/Express for the backend. It provides an intuitive platform for booking various travel services, exploring popular destinations, and viewing customer testimonials.
// 219. 
// 220. **Hosted On netlify:**  
// 221. [Travel Agency Website](https://travel-agency-full-stack-am.netlify.app/)
// 222. 
// 223. **GitHub Repository:**  
// 224. [GitHub repo](https://github.com/MohammedAbi/Travel-Agency-full-stack)
// 225. 
// 226. 
// 227. ## 🌟 Projects
// 228. # Weather App - React & Tailwind CSS
// 229. 
// 230. <img width="899" alt="Image" src="https://github.com/user-attachments/assets/0ebdbe60-0dba-4bda-94ff-2ca3bd17d43e" />
// 231. 
// 232. This image showcases the user interface of the weather application, providing real-time weather updates and forecasts.
// 233. 
// 234. ## Overview
// 235. 
// 236. This is a weather app built using **React** and **Tailwind CSS**. The app fetches real-time weather data and a 4-day forecast from the OpenWeatherMap API.
// 237. 
// 238. ## Features
// 239. 
// 240. - Display current weather and forecast for the next 4 days.
// 241. - Built with **React** and styled using **Tailwind CSS**.
// 242. - Responsive design that works on both desktop and mobile devices.
// 243. - Search functionality to check the weather of any location.
// 244. 
// 245. **Hosted On netlify:**  
// 246. [Weather-app-react-tailwind](https://weather-app-react-tailwind-es6.netlify.app)
// 247. 
// 248. **GitHub Repository:**  
// 249. [GitHub repo](https://github.com/MohammedAbi/Weather-app-react-tailwind?tab=readme-ov-file)
// 250. 
// 251. 
// 252. # Social Media Application
// 253. 
// 254. <img width="1510" alt="Image" src="https://github.com/user-attachments/assets/42b07412-fd29-4f95-930a-db4d390dd7ee" />
// 255. **This image showcases the client-side social media application.**
// 256. 
// 257. This project is a client-side social media application developed as part of the **JavaScript 2** course assignment and later enhanced during the **CSS Frameworks** course assignment. It implements core CRUD (Create, Read, Update, Delete) functionalities for posts and includes a user authentication system. The application is styled using **Tailwind CSS** and built with modern web development tools like **Vite** and **Vitest**. While essential features are implemented, additional functionalities are planned for future contributors.
// 258. 
// 259. ---
// 260. 
// 261. ## Features Implemented
// 262. 
// 263. ### User Management
// 264. 
// 265. - **Register New User**: Allows users to create accounts.
// 266. - **Login User**: Authenticates users and provides access to protected features.
// 267. 
// 268. ### Posts
// 269. 
// 270. - **Create Post**: Users can create new posts with a title, body, tags, and media attachments.
// 271. - **Read Posts**:
// 272.   - View all posts.
// 273.   - View a single post by ID.
// 274.   - View posts by specific users.
// 275. - **Update Post**: Edit existing posts (title, body, tags, and media).
// 276. - **Delete Post**: Remove a post from the system.
// 277. - **React to Posts**: Add emoji reactions (e.g., likes, dislikes) to posts.
// 278. - **Search Posts**: Search functionality for posts by keywords or tags.
// 279. - **Sort Posts**: Sorting functionality for posts by "Sort by Latest" or "Sort by Popularity".
// 280. 
// 281. **Hosted On Netlify:**
// 282. [Social Media Application](https://sma-social-media-application-2.netlify.app/)
// 283. 
// 284. **GitHub Repository:**
// 285. [Social Media Application](https://github.com/MohammedAbi/css-framework)
// 286. 
// 287. 
// 288. ---
// 289. 
// 290. 
// 291. ### FED1 Project Exam 1
// 292. 
// 293. ![Echopost](https://github.com/user-attachments/assets/00c7cc86-481d-4bde-924c-594e5bc66027)
// 294. This image showcases the homepage of the EchoPost website,
// 295. 
// 296. **Description:**  
// 297. EchoPost is a responsive web application designed for managing blog posts. It serves as the front-end user interface for an existing API blogging application, allowing users to view dynamic blog posts and providing admin functionalities for managing content. The project is developed using only HTML, CSS, and JavaScript, demonstrating proficiency in core web technologies.
// 298. 
// 299. ## Grade & Feedback from instructor
// 300. Grade: A (100/100)
// 301. 
// 302. Style guide - Outstanding 5 / 5 File is carefully considered and executed. Acceptable at a professional establishment.
// 303. 
// 304. Design file - Outstanding 5 / 5 File is carefully considered and executed. Acceptable at a professional establishment.
// 305. 
// 306. Planning Documents - Outstanding 5 / 5 Project has been meticulously planned, including a roadmap view.
// 307. 
// 308. User Stories - Outstanding 5 / 5 All user stories are completed to a hight standard.
// 309. 
// 310. User Experience - Outstanding 5 / 5 Every effort has been made to cater to the user experience, including sensible validation, error handling and user feedback..
// 311. 
// 312. Best Practice - Outstanding 5 / 5 HTML, JS and CSS best practices have been widely observed.
// 313. 
// 314. Feedback from instructor: Congratulations, you have passed you Project Exam 1!
// 315. 
// 316. **Hosted On Netlify:**
// 317. [echopost](https://echopost.netlify.app/)
// 318. 
// 319. **GitHub Repository:**
// 320. [FED1-PE1-MohammedAbi](https://github.com/NoroffFEU/FED1-PE1-MohammedAbi?tab=readme-ov-file)
// 321. 
// 322. 
// 323. ---
// 324. 
// 325. # Flow State Todo App
// 326. 
// 327. <img width="1509" alt="Image" src="https://github.com/user-attachments/assets/0cce456e-6612-4be2-996b-c90fccd1095b" />
// 328. This image showcases the Flow State Todo App!
// 329. 
// 330. 
// 331. This is a Todo application designed to help users manage tasks based on their current flow state and the difficulty of the tasks. The app categorizes tasks into three levels: Green (Easy), Orange (Moderate), and Red (Hard). Tasks are displayed and interacted with based on the user's optimal times for different levels of difficulty.
// 332. 
// 333. 
// 334. **Hosted On netlify:**  
// 335. [Flow State Todo App](https://flow-state-todo-app.netlify.app/)
// 336. 
// 337. 
// 338. **GitHub Repository:**
// 339. [Flow State Todo App](https://github.com/MohammedAbi/Flow-State-Todo-App)
// 340. 
// 341. 
// 342. 
// 343. ### JavaScript 1 - Course Assignment
// 344. 
// 345. ![website](https://github.com/user-attachments/assets/88dca136-434f-4cfa-918c-61fefeaef55e)
// 346. This image showcases the product display, featuring images, descriptions, and pricing.
// 347. 
// 348. **Description:**  
// 349. This project focuses on creating an interactive online store that displays products fetched from an API. The initial phase involved designing the layout using HTML and CSS, followed by adding interactivity with JavaScript.
// 350. 
// 351. **Features:**
// 352. - View product list and details
// 353. - Filter products by category, gender, or genre
// 354. - Add and remove items from the basket
// 355. - Checkout process with order confirmation
// 356. 
// 357. **Hosted On netlify:**  
// 358. [JavaScript Course Assignment](https://js-1-course-assignment-mohammedabi.netlify.app/)
// 359. 
// 360. **GitHub Repository:**  
// 361. [GitHub repo](https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi)
// 362. 
// 363. ---
// 364. 
// 365. ### Community Science Museum
// 366. 
// 367. ![communitysciencemuseum](https://github.com/user-attachments/assets/dbd984a3-b314-4814-8b80-a689dd74e2cc)
// 368. This image showcases the homepage of the Community Science Museum.
// 369. 
// 370. **Description:**  
// 371. For my first semester exam at Noroff, I developed an interactive science museum website aimed at children aged 7-15 and their families. This project combined project planning, web design, and development within a set timeframe.
// 372. 
// 373. **Grade:**  
// 374. B (92/100)
// 375. 
// 376. **Built With:**
// 377. - HTML
// 378. - CSS
// 379. - Figma
// 380. 
// 381. **Hosted On Netlify:**
// 382. [Community Science Museum](https://communitysciencemuseum-mohammedabi.netlify.app/)
// 383. 
// 384. ****GitHub Repository:**
// 385. [Community Science Museum](https://github.com/MohammedAbi/Semester-Project-1)
// 386. 
// 387. **Figma High Fidelity Wireframe:**
// 388. - [Desktop](https://www.figma.com/proto/OQF3jFgE811hR1zW0uhy6x/Community-Science-Museum?page-id=0%3A1&type=design&node-id=2-94&viewport=1725%2C14656%2C0.42&t=oMqF9FrOYIAJ3zI3-1&scaling=scale-down&starting-point-node-id=2%3A94)
// 389. - [Mobile](https://www.figma.com/proto/OQF3jFgE811hR1zW0uhy6x/Community-Science-Museum?page-id=0%3A1&type=design&node-id=315-1371&viewport=1379%2C8651%2C0.25&t=Zb7hnyxFdP4wLuC1-1&scaling=scale-down&starting-point-node-id=315%3A1371&show-proto-sidebar=1) 
// 390. 
// 391. **Figma Style Guide:**  
// 392. [Style Guide](https://www.figma.com/design/OQF3jFgE811hR1zW0uhy6x/Community-Science-Museum?node-id=2-94&node-type=frame&t=zlu6tU82aj3ch1qJ-0)
// 393. 
// 394. **Project Kanban Board:**  
// 395. [Kanban Board](https://github.com/users/MohammedAbi/projects/2/views/2)
// 396. 
// 397. ---
// 398. 
// 399. ### Skills
// 400. 
// 401. 
// 402. <p align="left">
// 403. <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="36" height="36" alt="VS Code" /></a><a href="https://www.sublimetext.com/index2" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sublimetext.svg" width="36" height="36" alt="Sublime Text" /></a><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a><a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a><a href="https://chakra-ui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chakra-colored.svg" width="36" height="36" alt="Chakra UI" /></a><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a><a href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="36" height="36" alt="Webpack" /></a><a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a><a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a><a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a><a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="36" height="36" alt="Photoshop" /></a><a href="https://www.adobe.com/uk/products/xd.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored.svg" width="36" height="36" alt="XD" /></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a><a href="https://apple.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored.svg" width="36" height="36" alt="MacOS" /></a>
// 404. </p>
// 405. 
// 406. 
// 407. ### Socials
// 408. 
// 409. <p align="left"> <a href="https://www.github.com/MohammedAbi" target="_blank" rel="noreferrer"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" /> </picture> </a> <a href="https://www.linkedin.com/in/mohammedabdulabi" target="_blank" rel="noreferrer"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" /> </picture> </a></p>
// 410. 
// 411. ### Badges
// 412. 
// 413. <b>My GitHub Stats</b>
// 414. 
// 415. <div style="display: flex; justify-content: flex-end; gap: 10px;">
// 416.     <a href="http://www.github.com/MohammedAbi">
// 417.         <img src="https://github-readme-stats.vercel.app/api?username=MohammedAbi&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&show_icons=true" alt="MohammedAbi's GitHub stats" />
// 418.     </a>
// 419.     <a href="http://www.github.com/MohammedAbi">
// 420.         <img src="https://github-readme-streak-stats.herokuapp.com/?user=MohammedAbi&stroke=ffffff&background=000000&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" alt="MohammedAbi's GitHub streak stats" />
// 421.     </a>
// 422. </div>
// 423. <div style="display: flex; justify-content: flex-end; gap: 10px;">
// 424. <a href="https://github.com/MohammedAbi" align="left"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MohammedAbi&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" /></a>
// 425. </div>
// 426. 
// 427. 
// 428. 
// 429. <b>Top Repositories</b>
// 430. 
// 431. <div width="100%" align="center"><a href="https://github.com/MohammedAbi/MohammedAbi" align="left"><img align="left" width="45%" src="https://github-readme-stats.vercel.app/api/pin/?username=MohammedAbi&repo=MohammedAbi&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&locale=en" /></a><a href="https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi" align="right"><img align="right" width="45%" src="https://github-readme-stats.vercel.app/api/pin/?username=MohammedAbi&repo=javaScript-1-Course-Assignment-Mohammed-Abi&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&locale=en" /></a></div><br /><br /><br /><br /><br /><br /><br />
// 432. 
// 433. <br /><br /><br /><br /><br />
// 434. 
// 435. <div width="100%" align="center"><a href="https://github.com/MohammedAbi/Semester-Project-1" align="left"><img align="left" width="45%" src="https://github-readme-stats.vercel.app/api/pin/?username=MohammedAbi&repo=Semester-Project-1&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&locale=en" /></a><a href="https://github.com/MohammedAbi/Flow-State-Todo-App" align="right"><img align="right" width="45%" src="https://github-readme-stats.vercel.app/api/pin/?username=MohammedAbi&repo=Flow-State-Todo-App&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=000000&hide_border=true&locale=en" /></a></div>
// 436. 
// 437. 
// 438. ---
// 439. <!--
// 440. 
// 441. # 💫 About Me
// 442. Hello!
// 443. 
// 444. I’m Mohammed Abdul Abi, a frontend developer nearly graduating with a Higher Professional Degree in Front-End Development from NorOff Education AS.
// 445. 
// 446. I hold a Master’s degree in Synthetic Organic Chemistry from the Norwegian University of Life Sciences in Ås, where I specialized in natural product synthesis.
// 447. 
// 448. My scientific background has sharpened my analytical thinking and problem-solving skills.
// 449. 
// 450. After completing my master's, I discovered my passion for frontend development.
// 451. 
// 452. Over the past two years, I have immersed myself in web design and programming, gradually building a solid foundation in HTML, CSS, and JavaScript.
// 453. 
// 454. I am excited about the opportunity to learn from experienced teams and contribute to creating user-friendly web interfaces.
// 455. 
// 456. Let’s connect to discuss how I can grow and contribute to your organization while pursuing my passion for frontend development!
// 457. 
// 458. 
// 459. ## 🛠️ Languages & Tools
// 460. ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
// 461. ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
// 462. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
// 463. ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
// 464. ![Node.js](https://img.shields.io/badge/node.js-%2346B768.svg?style=for-the-badge&logo=node.js&logoColor=white) 
// 465. ![Git](https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)
// 466. ![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white) 
// 467. ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
// 468. 
// 469. ## 📫 Contact Information
// 470. - **LinkedIn:** [Mohammed Abdul Abi](https://www.linkedin.com/in/mohammedabdulabi/)
// 471. - **Email:** [mohammedabdulabi@gmail.com](mailto:mohammedabdulabi@gmail.com)
// 472. 
// 473. ## 🌐 My Projects on Netlify
// 474.  - [Netlify Dashboard](https://app.netlify.com/teams/mohammedabi/sites)
// 475. 
// 476. 
// 477. 
// 478. ## 📜 Certifications
// 479. - **Learning the JavaScript Language**
// 480.   - Course completed by Mohammed Abdul Abi on March 7, 2024
// 481.   - Duration: 4 hours 2 minutes
// 482. 
// 483. ## 📊 GitHub Stats
// 484. ![](https://github-readme-stats.vercel.app/api?username=MohammedAbi&theme=dark&hide_border=false&include_all_commits=true&count_private=true)<br/>
// 485. ![](https://github-readme-streak-stats.herokuapp.com/?user=MohammedAbi&theme=dark&hide_border=false)<br/>
// 486. ![](https://github-readme-stats.vercel.app/api/top-langs/?username=MohammedAbi&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)
// 487. 
// 488. ### ✍️ Random Dev Quote
// 489. ![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)
// 490. 
// 491. ### 🔝 Top Contributed Repo
// 492. ![](https://github-contributor-stats.vercel.app/api?username=MohammedAbi&limit=5&theme=dark&combine_all_yearly_contributions=true)
// 493. 
// 494. ---
// 495. 
// 496. [![](https://visitcount.itsvg.in/api?id=MohammedAbi&icon=0&color=0)](https://visitcount.itsvg.in)
// 497. 
// 498. 
// 499. 
// 500.  Proudly created with GPRM ( https://gprm.itsvg.in ) -->
