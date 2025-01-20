import Workcard from './Workcard.jsx'
import "./experience.css"

function Experience() {
  return(
    <div className="experience">
      <div className="experience-container">
        <h2>Experience</h2>
          <div className="experiene-cards">
            <Workcard pic="images/n2klogo.jpg" 
              name="N2K" title="IT Intern" team="Talent Development Team" duration="November 2023 – July 2024" location="Fulton, MD"/>
            <Workcard pic="images/sblogo.jpg" 
              name="Springbrook High School" title="IT Intern" team="IT Department" duration="June 2023 – September 2023" location="Silver Spring, MD"/>
            <Workcard pic="images/citilogo.jpg" 
              name="Creative Information Technology Inc." title="Research Intern" team="Research Team" duration="July 2023" location="Falls Church, VA"/>
          </div>
        </div>
    </div>
  );
}

export default Experience