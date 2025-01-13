import {FaLinkedin,FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return(
    <div className="footer">
      <footer>
        <div className="footer-contact">
          <FaLinkedin />
          <p><b>LinkedIn<u></u></b></p>
          <p><a href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank">davidt-nguyen</a></p>
          <FaGithub />
          <p><b>GitHub</b></p>
          <p><a href="https://github.com/dtnguyen0" target="_blank">dtnguyen0</a></p>
          <MdEmail />
          <p><b>Email</b></p>
          <p><a href="mailto:davidtn@umich.edu" target="_blank">davidtn@umich.edu</a></p>
        </div>
        <div className="">
          <p>Copyright © {year} <b>David Nguyen</b>. All Rights Reserved</p>
          <p>Built with <b>ReactJS</b>, <b>CSS</b>. Deployed with <b>GitHub Pages</b></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer