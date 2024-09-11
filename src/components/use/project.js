import './project.scss';

const Project = ({ projectName, projectLink, projectImage }) => {
  return (
    <div className="project">
      <div className="projectDiv">
        <h3>{projectName}</h3>
        <img src={projectImage} alt={projectName} />
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div className="button">View Project</div>
        </a>
      </div>
    </div>
  );
};

export default Project;