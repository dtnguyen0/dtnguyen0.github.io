import './coursecard.css'

function Coursecard(course) {

  return(
    <div className="course-card">
      <h4 className="course-title"><a href={course.link} target="_blank">{course.title}</a></h4>
      <h4 className="course-status">{course.status ? "Completed" : "In Progress"}</h4>
      <p className="course-status">{course.name}</p>
    </div>
  );
}

export default Coursecard