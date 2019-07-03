import React from 'react';
import './index.scss';

const Card = ({ title, description, img, githubUrl, liveUrl }) => {
  return (
    <div className="Projects-card">
      <div className="Projects-cardImgWrapper">
        <img className="Projects-cardImg" src={img} />
      </div>

      <div className="Projects-cardTextContainer">
        <h1 className="Projects-cardTitle">{title}</h1>
        <p className="Projects-cardP">{description}</p>
        <div className="Projects-flexSpacer" />
        <div className="Projects-cardBtnWrapper">
          {githubUrl && (
            <a
              className="Projects-cardBtn"
              type="button"
              target="_blank"
              href={githubUrl}>
              Github
            </a>
          )}
          {liveUrl && (
            <a
              className="Projects-cardBtn"
              type="button"
              target="_blank"
              href={liveUrl}>
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
