import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardFlip.scss";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        This is the front of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div>
        This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default CardFlip;