import React from "react";

function PersonalProfile({ profile }) {
  return (
    <div className="about">
      <h3>Personal Profile</h3>
      <p>{profile}</p>
    </div>
  );
}

export default PersonalProfile;