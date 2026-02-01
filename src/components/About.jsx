// src/components/About.jsx
import React from "react";
import { aboutInfo } from "../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-6 text-indigo-300">About Me</h2>

        {/* Intro */}
        <p className="mb-8 text-lg leading-relaxed">{aboutInfo.intro}</p>

        {/* Education */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Education
        </h3>
        <p className="mb-2">
          {aboutInfo.education.degree},{" "}
          <strong>{aboutInfo.education.school}</strong> (
          {aboutInfo.education.years})
        </p>
        <ul className="list-disc list-inside mb-6">
          {aboutInfo.education.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Technical Skills
        </h3>
        <ul className="list-disc list-inside mb-6">
          {aboutInfo.technicalSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Soft Skills
        </h3>
        <ul className="list-disc list-inside mb-6">
          {aboutInfo.softSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>

        {/* Projects */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Notable Projects
        </h3>
        <ul className="list-disc list-inside mb-6">
          {aboutInfo.projects.map((project, idx) => (
            <li key={idx} className="pb-2">
              <strong>{project.title}:</strong> {project.description}
            </li>
          ))}
        </ul>

        {/* Contact */}
        <p className="mt-8 text-lg">
          Check out my work on{" "}
          <a
            href={aboutInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>{" "}
          or reach me via{" "}
          <a
            href="mailto:mohammedabdulabi@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Mohammed,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity."
            className="text-indigo-400 hover:underline"
          >
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
//     >
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold mb-6 text-indigo-300">About Me</h2>
//         <p className="mb-4 text-lg">
//           Hi, I’m <strong>Mohammed Abdul Abi</strong>, a Frontend Developer from
//           Stavanger, Norway. I graduated from{" "}
//           <strong>Noroff Education AS</strong> with a strong focus on
//           JavaScript, UI development, and creating user-friendly web solutions.
//           I’m motivated to contribute to a product-driven team while continuing
//           to grow technically with modern frontend frameworks and best
//           practices.
//         </p>

//         <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
//           Education
//         </h3>
//         <p className="mb-4">
//           Higher Professional Degree – Frontend Development,{" "}
//           <strong>Noroff Education AS</strong> (2023 – 2025) <br />
//           Built expertise in HTML, CSS, JavaScript, TypeScript, and React.
//           Gained hands-on experience in responsive design, accessibility (WCAG),
//           and web deployment. Final project demonstrated concept-to-product
//           development, teamwork, and problem-solving skills.
//         </p>

//         <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
//           Technical Skills
//         </h3>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS
//           </li>
//           <li>Responsive Design & Accessibility (WCAG)</li>
//           <li>API Integration: RESTful APIs, JSON</li>
//           <li>Version Control: Git & GitHub</li>
//           <li>Deployment: Netlify, Vercel</li>
//           <li>Design: Figma (basic)</li>
//         </ul>

//         <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
//           Soft Skills
//         </h3>
//         <ul className="list-disc list-inside mb-4">
//           <li>Team-oriented, collaborative, and receptive to feedback</li>
//           <li>Strong communication and problem-solving skills</li>
//           <li>Dedicated to writing clean, maintainable, and efficient code</li>
//           <li>Curious and motivated to learn and grow professionally</li>
//         </ul>

//         <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
//           Notable Projects
//         </h3>
//         <ul className="list-disc list-inside">
//           <li className="pb-2">
//             <strong>Portfolio Website:</strong> Responsive personal portfolio
//             showcasing projects, skills, and UI/UX design.
//           </li>
//           <li>
//             <strong>Weather App:</strong> Real-time weather application with
//             dynamic rendering and responsive layouts.
//           </li>
//           <li>
//             <strong>E-commerce Mockup:</strong> Interactive online store
//             demonstrating product listings and API integration.
//           </li>
//           <li>
//             <strong>Community Science Museum:</strong> Educational website for
//             children and families, built with design and coding focus.
//           </li>
//           <li>
//             <strong>EchoPost:</strong> Blog management interface demonstrating
//             responsive design and clean code practices.
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default About;

// // import CountUp from "react-countup";

// // function About() {
// //   const skills = [
// //     { label: "HTML & CSS", level: "w-11/12" },
// //     { label: "JavaScript", level: "w-11/12" },
// //     { label: "TypeScript", level: "w-10/12" },
// //     { label: "React JS", level: "w-10/12" },
// //     { label: "Node JS", level: "w-10/12" },
// //     { label: "Tailwind CSS", level: "w-9/12" },
// //     { label: "Git & GitHub", level: "w-9/12" },
// //     { label: "REST APIs", level: "w-9/12" },
// //   ];

// //   const stats = [
// //     { number: 3, label: "Years of Learning" },
// //     { number: 20, label: "Projects Completed" },
// //     { number: 10, label: "Team Experiences" },
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
// //     >
// //       <div className="container mx-auto px-8 md:px-16 lg:px-24">
// //         <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
// //           About Me
// //         </h2>

// //         <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
// //           <p className="text-lg leading-relaxed">
// //             I enjoy creating clean, responsive websites using modern tools and
// //             frameworks. My training gave me a strong foundation in HTML, CSS,
// //             JavaScript, and React. I focus on building user-friendly, accessible
// //             web applications that provide seamless experiences.
// //           </p>
// //           <p className="text-lg leading-relaxed">
// //             I’m motivated by continuous learning and excited to contribute to
// //             collaborative teams that value creativity and growth.
// //           </p>
// //         </div>

// //         {/* Skills + Stats grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
// //           {/* Skills */}
// //           <div className="space-y-5">
// //             {skills.map(({ label, level }) => (
// //               <div key={label} className="flex items-center gap-4">
// //                 <span className="w-32 font-medium text-gray-300">{label}</span>
// //                 <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
// //                   <div
// //                     className={`h-3 rounded-full transition-all duration-700 bg-gradient-to-r from-indigo-500 to-purple-500 ${level}`}
// //                   ></div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Stats */}
// //           <div className="flex flex-col justify-center gap-6 text-center text-gray-300">
// //             {stats.map(({ number, label }) => (
// //               <div key={label} className="space-y-1">
// //                 <h3 className="text-3xl md:text-4xl font-bold">
// //                   <CountUp end={number} duration={1.5} />+
// //                 </h3>
// //                 <p className="uppercase text-sm md:text-base tracking-wider">
// //                   {label}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;
