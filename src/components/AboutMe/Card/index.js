import React, { forwardRef } from 'react';

import './index.scss';

const Card = forwardRef(({ title, text, img }, ref) => {
  return (
    <div className="AboutMe-card" ref={ref}>
      <img src={img} alt="computer icon" />
      <h1 className="AboutMe-cardTitle"> {title} </h1>
      <p className="AboutMe-cardP">{text}</p>
    </div>
  );
});

export default Card;
