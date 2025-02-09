import React from "react";

function Education({ education }) {
  return (
    <div className="education-info">
      <h3>Education</h3>
      {education.map((school, index) => (
        <div key={index} className="education-item">
          <h3>{school.school}</h3>
          <p>{school.degree}</p>
          <p>{school.years}</p>
          <p>GPA: {school.gpa}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;