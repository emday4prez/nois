import React from "react";
import "./profile-card.scss";
import profile from "../../assets/ssl.jpeg";

const ProfileCardFront = ({ handleClick }) => {
  return (
    <div className='card-front' onClick={handleClick}>
      <div>
        <img className='profile-pic' src={profile} alt='profile pic' />
      </div>
      <button className='front-btn'>N.O.I.S.</button>
    </div>
  );
};

export default ProfileCardFront;
