import React from "react";
import "./profile-card.scss";

const ProfileCardBack = ({ handleClick }) => {
  return (
    <div>
      THIS IS THE BACK
      <button onClick={handleClick}>FLIP</button>
    </div>
  );
};

export default ProfileCardBack;