import Coursecard from './Coursecard.jsx'

function About(){
  
  return(
    <div className="about">
      <h2>About</h2>
        <p>As a passionate programmer with strong interests in AI, Machine Learning, Embedded Systems, Software Development, and Cloud Computing, I want to turn ideas into reality with software solutions that are applicable in any situation.</p>
        <p>My experience spans from full-stack development, cloud computing, and data science which includes technologies and languages such as C/C++, ReactJS, Python, Pandas, AWS, and many more.</p>
        <p>Outside of everything technical, I've acquired many skills and a variety of interests. I've had the privilege of cutting hair for over 25 students—a skill I picked up as a way to connect with others. I also enjoy listening and discovering new music (fun fact: my main playlist has over 1,400 songs!), staying active through workouts, experiencing different cultures, and playing/watching sports.</p>
      <h3>Education</h3>
      <div>
        <Coursecard title="EECS 280" link="https://eecs280.org/" status={false} name="C++ Programming and Data Structures"/>
        <Coursecard title="EECS 270" link="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-270/" status={false} name="Logic Design"/>
        <Coursecard title="EECS 203" link="https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-203/" status={true} name="Discrete Math"/>
        <Coursecard title="ENGR 100" link="https://adue.engin.umich.edu/engr100_sections/850-robotics/" status={false} name="Robotics Mechanisms"/>
        <Coursecard title="MATH 215" link="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/200-level-math-courses.html" status={true} name="Vector and Multivariable Calculus"/>
        <Coursecard title="MATH 214" link="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/200-level-math-courses.html" status={true} name="Linear Algebra"/>
        </div>
    </div>
  );
}

export default About