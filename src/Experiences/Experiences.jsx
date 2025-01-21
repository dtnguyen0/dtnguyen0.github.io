import Workcard from './Workcard.jsx'
import "./experiences.css"

function Experiences() {
  return(
    <div className="experiences" id="experiences">
      <div className="experience-container">
        <h2>Experiences</h2>
          <div className="experiene-cards">
            <Workcard pic="images/n2klogo.jpg" web="https://www.n2k.com/"
              name="N2K" title="IT Intern" team="Talent Development Team" duration="November 2023 – July 2024" location="Fulton, MD"/>
            <Workcard pic="images/sblogo.jpg" web="https://www.montgomeryschoolsmd.org/schools/springbrookhs/"
              name="Springbrook High School" title="IT Intern" team="IT Department" duration="June 2023 – September 2023" location="Silver Spring, MD"/>
            <Workcard pic="images/citilogo.jpg" web="https://www.citi-us.com/"
              name="Creative Information Technology Inc." title="Research Intern" team="Research Team" duration="July 2023" location="Falls Church, VA"/>
          </div>
        </div>
    </div>
  );
}

export default Experiences