import './header.css'
import {useState} from 'react'

function Header() {
  const pic = "DavidHeadshot.jpg"
  {/*Test */}
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-name">David Nguyen</a>
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="David_Nguyen_Resume.pdf" target="_blank" className="resume">Resume</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header