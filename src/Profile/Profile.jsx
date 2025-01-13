import {FaLinkedin,FaGithub} from "react-icons/fa";
import './profile.css'

function Profile() {
  const pic = "DavidHeadshot.jpg"  
  const background = "umichbackground.jpg"

  return(
    <div className="profile">
      <div className="profile-text">
        <p>Hi, my name is</p>
        <h1>David Nguyen</h1>
        <p>and I am studying Computer Science and Electrical Engineering at the University of Michigan!</p>
        <p>Feel free to stay in touch with me! <b><u>davidtn@umich.edu</u></b></p>
        <img src={pic}></img>
        <div>
          <a href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/dtnguyen0" target="_blank"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Profile