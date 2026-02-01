import { aboutInfo } from "../data/aboutData";

const skillsLevels = {
  "Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS":
    "w-11/12",
  "Responsive Design & Accessibility (WCAG)": "w-11/12",
  "API Integration: RESTful APIs, JSON": "w-10/12",
  "Version Control: Git & GitHub": "w-12/12",
  "Deployment: Netlify, Vercel": "w-11/12",
  "Design: Figma (basic)": "w-11/12",
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Intro */}
        <h2
          id="about-heading"
          className="text-4xl font-bold mb-6 text-indigo-300"
        >
          About Me
        </h2>
        <p className="mb-8 text-lg">{aboutInfo.intro}</p>

        {/* Education */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Education
        </h3>
        <p className="mb-4">
          <strong>{aboutInfo.education.degree}</strong>,{" "}
          {aboutInfo.education.school} ({aboutInfo.education.years})
        </p>
        <ul className="list-disc list-inside mb-8">
          {aboutInfo.education.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Technical Skills
        </h3>
        <div className="space-y-6 mb-8">
          {aboutInfo.technicalSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col group"
              role="progressbar"
              aria-label={skill}
              aria-valuenow={(parseInt(skillsLevels[skill]) * 100) / 12}
              aria-valuemin="0"
              aria-valuemax="100"
              tabIndex="0"
            >
              <span className="text-gray-300 font-medium mb-2">{skill}</span>
              <div className="w-full bg-gray-800 rounded-full h-8 overflow-hidden">
                <div
                  className={`h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ${skillsLevels[skill]}`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Soft Skills
        </h3>
        <ul className="list-disc list-inside mb-8">
          {aboutInfo.softSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>

        {/* Notable Projects */}
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">
          Notable Projects
        </h3>
        <ul className="list-disc list-inside">
          {aboutInfo.projects.map((project, i) => (
            <li key={i} className="mb-2">
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
            aria-label="Visit my GitHub profile"
            className="text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            GitHub
          </a>{" "}
          or reach me via{" "}
          <a
            href={`${aboutInfo.contact.email}?subject=Portfolio%20Inquiry&body=Hi%20Mohammed,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity.`}
            className="text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Send me an email"
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
