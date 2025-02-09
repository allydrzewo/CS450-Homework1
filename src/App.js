// App.js (Parent)
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

function App() {
  const [resumeData] = useState({
    name: "Alexandra Drzewosz",
    title: "Computer Science",
    contact: {
      email: "ad976@njit.edu",
      web: "https://github.com/allydrzewo",
      mobile: "01234567890",
    },
    profile: "My name is Alexandra Drzewosz. I am a Computer Science student at NJIT minoring in Applied Mathematics. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    workExperience: [
      {
        title: "Job Title at Company",
        duration: "August 2022 – December 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Job Title 2 at Company 2",
        duration: "August 2020 – December 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    skills: [
      ["A Key skill", "A Key skill", "A Key skill"],
      ["A Key skill", "A Key skill", "A Key skill"],
      ["A Key skill", "A Key skill", "A Key skill"],
    ],
    education: [
      {
        school: "New Jersey Institute of Technology",
        degree: "B.S in Computer Science",
        years: "2018 - 2022",
        gpa: "3.9",
      },
      {
        school: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        years: "2022 - 2023",
        gpa: "4.0",
      },
    ],
  });

  return (
    <div className="resume-container">
      <Header name={resumeData.name} title={resumeData.title} contact={resumeData.contact} />
      <hr className="yellow-line" />
      <PersonalProfile profile={resumeData.profile} />
      <hr />
      <WorkExperience workExperience={resumeData.workExperience} />
      <hr />
      <Skills skills={resumeData.skills} />
      <hr />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;
