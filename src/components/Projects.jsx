import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-gray-100 py-20 scroll-mt-32"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          id="projects-heading"
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              aria-label={`View details for ${project.name}`}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            >
              <article
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.name} project`}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3
                  id={`project-title-${project.id}`}
                  className="text-2xl font-bold mb-2 text-indigo-300 truncate"
                >
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 truncate">
                  {Array.isArray(project.technologies)
                    ? project.technologies.join(", ")
                    : project.technologies}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
