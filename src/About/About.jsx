import Coursecard from "./Coursecard.jsx"
import "./about.css"

function About(){
  
  return(
    <div className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About</h2>
          <p>As a passionate programmer with strong interests in AI, Machine Learning, Computer Hardware, Software Development, and Cloud Computing, I want to turn ideas into reality with software solutions that are applicable in any situation.</p>
          <p>My experience spans from full-stack development, cloud computing, and data science which includes technologies and languages such as C/C++, ReactJS, Python, Pandas, AWS, and many more.</p>
          <p>Outside of everything technical, I've acquired many skills and a variety of interests. I've had the privilege of cutting hair for over 25 students—a skill I picked up as a way to connect with others. I also enjoy listening and discovering new music (fun fact: my main playlist has over 1,400 songs!), staying active through workouts, experiencing different cultures, and playing/watching sports.</p>
        </div>
        <div className="div-bar"></div>
        <div className="education-container">
          <h3>Education</h3>
          <img className="umich-icon" src="images/umichicon.png"></img>
          <p><i>Bachelor of Science in Engineering in Computer Science, Minor in Electrical Engineering</i></p>
          <div className="courses">
            <Coursecard title="EECS 280" link="https://eecs280.org/" name="C++ Programming and Data Structures"/>
            <Coursecard title="EECS 270" link="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-270/" name="Logic Design"/>
            <Coursecard title="EECS 203" link="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-203/" name="Discrete Math"/>
            <Coursecard title="ENGR 100" link="https://adue.engin.umich.edu/engr100_sections/850-robotics/" name="Robotics Mechanisms"/>
            <Coursecard title="MATH 215" link="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/200-level-math-courses.html" name="Vector and Multivariable Calculus"/>
            <Coursecard title="MATH 214" link="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/200-level-math-courses.html" name="Linear Algebra"/>
          </div>
        </div>
        <div className="div-bar"></div>
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="skills">
              <div className="skill-tools">
                <img src="images/cppicon.png"></img>
                <img src="images/pythonicon.png"></img>
                <img src="images/htmlicon.png"></img>
                <img src="images/cssicon.png"></img>
                <img src="images/jsicon.png"></img>
                <img src="images/matlabicon.png"></img>
                <img src="images/reactjsicon.webp"></img>
                <img src="images/nodejsicon.png"></img>
                <img src="images/pandasicon.png"></img>
                <img src="images/numpyicon.png"></img>
                <img src="images/giticon.png"></img>
                <img src="images/awsicon.png"></img>
                <img src="images/azureicon.png"></img>
                <img src="images/psicon.png"></img>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About