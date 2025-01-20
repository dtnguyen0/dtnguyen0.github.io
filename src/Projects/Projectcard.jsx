import {FaGithub} from "react-icons/fa";
import './projectcard.css'

function Projectcard(project) {
  
  return(
    <div className="project-card">
      <div className="project-top">
        <h3 className="project-name"><b>{project.name}</b></h3>
        <a href={project.link} className="project-link" target="_blank"><FaGithub /></a>
      </div>
      <img src={project.img1}></img><img src={project.img2}></img><img src={project.img3}></img><img src={project.img4}></img><img src={project.img5}></img>
      <p className="project-summary">{project.summary}</p>
    </div>
  );
}

export default Projectcard