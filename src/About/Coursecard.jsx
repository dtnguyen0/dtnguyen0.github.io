import './coursecard.css'

function Coursecard(course) {

  return(
    <div className="course-card">
      <h4 className="course-title"><a href={course.link} target="_blank"><u>{course.title}</u></a></h4>
      <p className="course-status">{course.name}</p>
    </div>
  );
}

export default Coursecard