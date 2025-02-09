import React from "react";

function WorkExperience({ workExperience }) {
  return (
    <div className="work">
      <h3>Work Experience</h3>
      {workExperience.map((job, index) => (
        <div key={index} className="work-item">
          <h3>{job.title} ({job.duration})</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;