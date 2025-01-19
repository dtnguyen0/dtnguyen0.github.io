import Workcard from './Workcard.jsx'

function Experience() {
  return(
    <div className="experience">
      <h2>Experience</h2>
        <div>
          <Workcard pic="images/n2klogo.jpg" 
            name="N2K" title="IT Intern" duration="November 2023 – July 2024" location="Fulton, MD"/>
          <Workcard pic="images/sblogo.jpg" 
            name="Springbrook High School" title="IT Intern" duration="June 2023 – September 2023" location="Silver Spring, MD"/>
          <Workcard pic="images/citilogo.jpg" 
            name="Creative Information Technology Inc." title="Research Intern" duration="July 2023" location="Falls Church, VA"/>
        </div>
    </div>
  );
}

export default Experience