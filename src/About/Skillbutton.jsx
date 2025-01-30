import { useState } from "react";
import "./skillbutton.css";

function Skill(tool) {
  const [skillOption, setSkillOption] = useState("languages");

  const handleSelect = (skill) => {
    setSkillOption(skill);
  };

  return (
    <div className="skills">
      <div className="button-container">
        <button className={`skill-button ${skillOption === "languages" ? "selected" : ""}`} onClick={() => handleSelect("languages")}>Languages</button>
        <button className={`skill-button ${skillOption === "technologies" ? "selected" : ""}`} onClick={() => handleSelect("technologies")}>Technologies</button>
        <button className={`skill-button ${skillOption === "certifications" ? "selected" : ""}`} onClick={() => handleSelect("certifications")}>Certifications</button>
      </div>
      <div className="skill-images">
        {skillOption === "languages" && (
          <>
            <img src={tool.l1} title="C++" />
            <img src={tool.l2} title="Python" />
            <img src={tool.l3} title="HTML" />
            <img src={tool.l4} title="CSS"/>
            <img src={tool.l5} title="JavaScript" />
            <img src={tool.l6} title="TypeScript" />
            <img src={tool.l7} title="MATLAB" />
          </>
        )}
        {skillOption === "technologies" && (
          <>
            <img src={tool.t1} title="React.js" />
            <img src={tool.t2} title="Next.js" />
            <img src={tool.t3} title="Pandas" />
            <img src={tool.t4} title="NumPy" />
            <img src={tool.t5} title="Matplotlib" />
            <img src={tool.t6} title="Git" />
            <img src={tool.t7} title="AWS" />
            <img src={tool.t8} title="Azure" />
            <img src={tool.t9} title="Photoshop" />
          </>
        )}
        {skillOption === "certifications" && (
          <>
            <img src={tool.c1} title="AWS Cloud Practitioner" />
            <img src={tool.c2} title="Azure Fundamentals" />
            <img src={tool.c3} title="ISC2 Certified in Cybersecuirty" />
          </>
        )}
      </div>
    </div>
  );
}

export default Skill;
