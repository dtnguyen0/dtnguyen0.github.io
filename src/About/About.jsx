import Coursecard from "./Coursecard.jsx"
import Skillbutton from "./Skillbutton.jsx"
import "./about.css"

function About(){
  return(
    <div className="about" id="about">
      <div className="about-container">
        <h2>About</h2>
        <div className="about-text">
          <p>I am passionate programmer with interests in AI, Machine Learning, Computer Hardware, Software Development, and Cloud Computing, I want to turn ideas into reality with software solutions that are applicable in any situation.</p>
          <p>My experience spans from full-stack development, cloud computing, and data science technologies and languages such as C++, React.js, Python, Pandas, and AWS.</p>
          <p>Outside of everything technical, I've acquired many skills and a variety of interests. I've had the privilege of cutting hair for over 25 students—a skill I picked up as a way to connect with others. I also enjoy listening and discovering new music (with my main playlist has over 1,400 songs!), investing, staying active through workouts, experiencing different cultures, and playing/watching sports.</p>
        </div>
        <div className="div-bar"></div>
        <div className="education-container">
          <h3>Education</h3>
          <img className="umich-icon" src="images/umichicon.png" title="GO BLUE!"></img>
          <p><i>Bachelor of Science in Engineering in Computer Science, Minor in Electrical Engineering</i></p>
          <div className="courses">
            <Coursecard title="EECS 280" name="C++ Programming and Data Structures" />
            <Coursecard title="EECS 270" name="Logic Design" />
            <Coursecard title="EECS 203" name="Discrete Math" />
            <Coursecard title="ENGR 100" name="Robotics Mechanisms" />
            <Coursecard title="MATH 215" name="Vector and Multivariable Calculus"  />
            <Coursecard title="MATH 214" name="Linear Algebra" />
          </div>
        </div>
        <div className="div-bar"></div>
        <div className="skills-container">
          <h3>Skills</h3>
          <Skillbutton l1="images/cppicon.png" l2="images/pythonicon.png" l3="images/htmlicon.png" l4="images/cssicon.png" l5="images/jsicon.png" l6="images/tsicon.png" l7="images/matlabicon.png"
                       t1="images/reactjsicon.webp" t2="images/nextjsicon.png" t3="images/pandasicon.png" t4="images/numpyicon.png" t5="images/matplotlibicon.png" t6="images/giticon.png" t7="images/awsicon.png" t8="images/azureicon.png" t9="images/psicon.png" 
                       c1="images/awscpimg.png" c2="images/azurefunimg.png" c3="images/isc2ccimg.png"/>
        </div>
      </div>
    </div>
  );
}

export default About