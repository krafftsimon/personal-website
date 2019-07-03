import React from 'react';
import icon4 from 'assets/icon4.png';
import icon5 from 'assets/icon5.png';
import './index.scss';

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <div className="Contact-background">
        <div className="Contact-stripe1" />
        <div className="Contact-stripe2" />
      </div>
      <div className="Contact-container">
        <h1 className="Contact-title"> Contact Information </h1>
        <div className="Contact-box">
          <div className="Contact-phone">
            <img className="Contact-icon" src={icon4} alt="phone icon" />
            <span> 914-620-7262 </span>
          </div>
          <div className="Contact-email">
            <img className="Contact-icon" src={icon5} alt="mail icon" />
            <span> krafftsimon@gmail.com </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
