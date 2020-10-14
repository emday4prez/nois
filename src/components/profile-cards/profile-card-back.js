import React from "react";
import "./profile-card.scss";

const ProfileCardBack = ({ handleClick }) => {
  return (
    <div className='card-back'>
<h1>THIS IS THE BACK </h1>
      <button className='button-back' onClick={handleClick}>FLIP</button>
    </div>
  );
};

export default ProfileCardBack;