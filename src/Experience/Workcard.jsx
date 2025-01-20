import './workcard.css'

function Workcard(work) {
  
  return(
    <div className="work-card">
  <div className="work-company">
    <img src={work.pic} className="work-pic"></img>
    <h3 className="work-name"><b>{work.name}</b></h3>
  </div>
  <div className="work-content">
    <h4 className="work-title">{work.title}</h4> 
    <p className="work-duration"><i>{work.duration}</i></p>
  </div>
  <p className="work-position">| <i>{work.team}</i></p>
</div>

  );
}

export default Workcard