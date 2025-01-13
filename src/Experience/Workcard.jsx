import './workcard.css'

function Workcard(work) {
  
  return(
    <div className="work-card">
      <img src={work.pic} className="work-pic"></img>
      <h3 className="work-name"><b>{work.name}</b></h3>
      <h4 className="work-title">{work.title}</h4>
      <p className="work-duration">{work.duration}</p>
      <p className="work-location">{work.location}</p>
    </div>
  );
}

export default Workcard