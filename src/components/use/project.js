import './project.scss';

const Project = ({ projectName, projectLink, projectImage, index }) => {


return (
    <div className="project" style={{ top: `${index * 109}px` }}>
        <div className="projectContent">
            <div>
                <h3>{projectName}</h3>
                <a href={projectLink} target="_blank" className="button"></a>
            </div>
        </div>
        <img src={projectImage} alt={projectName} />
    </div>
  );
};

export default Project;