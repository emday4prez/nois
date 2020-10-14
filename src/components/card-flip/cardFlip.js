import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardFlip.scss";
import ProfileCardFront from "../profile-cards/profile-card-front";
import ProfileCardBack from "../profile-cards/profile-card-back";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <ProfileCardFront handleClick={handleClick}></ProfileCardFront>

     <ProfileCardBack handleClick={handleClick}></ProfileCardBack>
    </ReactCardFlip>
  );
};

export default CardFlip;
