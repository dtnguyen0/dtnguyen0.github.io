import Workcard from './Workcard.jsx'
import "./experiences.css"

function Experiences() {
  return(
    <div className="experiences" id="experiences">
      <div className="experience-container">
        <h2>Experiences</h2>
          <div className="experiene-cards">
            <Workcard pic="images/voidtechlogo.jpg" web="https://void-tech-um.github.io/index.html"
              name="VOID Tech" title="Software Engineer" team="Developer Team" duration="Janurary 2025 - Present" location="Ann Arbor, MI"/>
            <Workcard pic="images/michiganhackerslogo.jpg" web="https://michhackers.com/"
              name="Michigan Hackers" title="Software Engineer" team="Advanced Web Development Team" duration="September 2024 - Present" location="Ann Arbor, MI"/>
            <Workcard pic="images/n2klogo.jpg" web="https://www.n2k.com/"
              name="N2K" title="IT Intern" team="Talent Development Team" duration="November 2023 – July 2024" location="Fulton, MD"/>
            <Workcard pic="images/sblogo.jpg" web="https://www.montgomeryschoolsmd.org/schools/springbrookhs/"
              name="Springbrook High School" title="IT Intern" team="IT Department" duration="June 2023 – September 2023" location="Silver Spring, MD"/>
          </div>
        </div>
    </div>
  );
}

export default Experiences