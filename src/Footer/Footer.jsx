import {FaLinkedin,FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import "./footer.css"

function Footer() {
  const year = new Date().getFullYear();

  return(
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-icons">
            <a className="footer-linkedin" href="https://www.linkedin.com/in/davidt-nguyen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className="footer-github" href="https://github.com/dtnguyen0" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="footer-email" href="mailto:davidtn@umich.edu" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
          </div>
          <div className="footer-copyright">
            <p>Copyright © {year} David Nguyen. All Rights Reserved</p>
            <p>Built with React.js, CSS. Deployed with GitHub Pages</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer