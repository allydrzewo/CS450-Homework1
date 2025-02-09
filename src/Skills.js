import React from "react";

function Skills({ skills }) {
  return (
    <div className="key-skills">
      <h3>Key Skills</h3>
      <div className="skills-list">
        {skills.map((group, index) => (
          <ul key={index}>
            {group.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Skills;