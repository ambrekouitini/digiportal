import '../../styles/use/project.scss';

const Project = ({ key, title, brand, year, type, route }) => {


return (
    <div className='projectCard'>
        <div className='projectContent'>
            <div>
                <h3>{title}</h3>
                <span>{brand}</span>
                <span>{brand}</span>
                <span>{year}</span>
            </div>
        </div>
    </div>
  );
};

export default Project;