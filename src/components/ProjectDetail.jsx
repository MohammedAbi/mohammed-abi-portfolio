import { useParams, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.js";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <Link to="/#projects" className="text-indigo-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-32 px-8 md:px-16 lg:px-24">
      <h2
        id="project-name"
        className="text-4xl font-bold mb-6 text-indigo-300 scroll-mt-32"
      >
        {project.name}
      </h2>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-lg mb-6 object-cover"
      />
      <p className="mb-4">
        <strong>Type:</strong> {project.type}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mb-4">
        <strong>Problem:</strong> {project.problem}
      </p>
      <p className="mb-4">
        <strong>Solution:</strong> {project.solution}
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>

      <Link
        to="/#projects"
        className="mt-8 inline-block text-indigo-500 hover:underline"
      >
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
