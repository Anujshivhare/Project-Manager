import { FaGithub, FaLink } from "react-icons/fa";

interface Project {
  imageUrl: string;
  title: string;
  liveUrl: string;
  githubUrl: string;
}

function GridProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid-container-wrapper">
      <ul className="grid-container">
        {projects.map((project, idx) => (
          <li key={idx} className="project-card">
            <div className="project-image_container relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="title-container">
              <h2 className="project-title">{project.title}</h2>
            </div>
            <div className="project-links">
              {project.liveUrl.trim() && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="link-icon" size={25} />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="link-icon" size={25} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridProjectsList;
