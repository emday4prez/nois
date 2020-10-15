import React from "react";
import "../plaque/plaque.scss";

const Plaque = ({
  item,
  photo,
  artist,
  album,
  year,
  info,
  platinum,
  grammy
}) => {
  const grammyList = grammy.map((el) => (
    <p className='grammy' key={el.length}>
      {el}
    </p>
  ));
  return (
    <div className='plaque-container'>
      <div className='plaque'>
        <div className='art'>
          <img src={photo} alt='k.' />
        </div>
        <div className='plaque-text'>
          <p className='grammy'>{year}</p>
          <h3>{artist}</h3>
          <h4> {album}</h4>
          <p className='grammy'>{platinum}</p>
          <p className='grammy'>{grammyList}</p>
        </div>
      </div>
    </div>
  );
};

export default Plaque;
