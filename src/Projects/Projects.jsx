import Projectcard from './Projectcard.jsx'
import { useState } from "react"
import "./projects.css"

function Projects() {

  const [showGitHub] = useState(true);

  return(
    <div className="projects" id="projects">
      <div className="project-container">
        <h2>Projects</h2>
          <div className="project-cards">
            <Projectcard showGitHub={false} name="FindBlue" img1="images/reactjsicon.webp" img2="images/tsicon.png" img3="images/cssicon.png" img4="images/nextjsicon.png" link="https://github.com/dtnguyen0/"
              summary="A user-friendly website for University of Michigan to create and discover opportunities for projects, research, and other collaboration resources." />
            <Projectcard showGitHub={false} name="Spotify Analysis" img1="images/pythonicon.png" img2="images/pandasicon.png" img3="images/numpyicon.png" img4="images/matplotlibicon.png" link="https://github.com/dtnguyen0/"
              summary="A Spotify statistics that displays a user’s most listened to artists, genres, songs, era, which allows users to automatically give song recommendations." />
            <Projectcard showGitHub={true} name="Portfolio Website" img1="images/reactjsicon.webp" img2="images/jsicon.png" img3="images/cssicon.png" link="https://github.com/dtnguyen0/portfolio"
              summary="The website you're seeing right now! :)" />
          </div>
        </div>
    </div>
        
  );
}

export default Projects