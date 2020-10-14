import React from "react";
import "./profile-card.scss";

const ProfileCardFront = ({ handleClick }) => {
  return (
    <div>
      THIS IS THE FRONT
      <button onClick={handleClick}>FLIP</button>
    </div>
  );
};

export default ProfileCardFront;
