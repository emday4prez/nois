import React from "react";
import "./profile-card.scss";
import profile from "../../assets/ssl.jpeg";

const ProfileCardFront = ({ handleClick }) => {
  return (
    <div className='card-front' onClick={handleClick}>
      <div>
        <img className='profile-pic' src={profile} alt='profile pic' />
      </div>
      <div className='front-text'>
        <h1>Ya Boy N.O.I.S.</h1>
        <h4>
          Record Producer <br /> Mixing Engineer{" "}
        </h4>
      </div>
    </div>
  );
};

export default ProfileCardFront;
