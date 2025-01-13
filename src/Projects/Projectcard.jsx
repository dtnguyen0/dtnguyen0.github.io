import {FaGithub} from "react-icons/fa";
import './projectcard.css'

function Projectcard(project) {
  
  return(
    <div className="project-card">
      <h3 className="project-name"><b>{project.name}</b></h3>
      <h4 className="project-tools">Technologies Used: {project.tools}</h4>
      <p className="project-summary">{project.summary}</p>
      <a href={project.link} className="project-link"><FaGithub /></a>
    </div>
  );
}

export default Projectcard