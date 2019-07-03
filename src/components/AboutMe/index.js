import React, { createRef, useState, useEffect } from 'react';
import Card from './Card';
import './index.scss';

const AboutMe = () => {
  const cardCount = 3;
  const cardRefs = Array.from({ length: cardCount }, () => createRef());
  const cardContainerRef = createRef();

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(showCards, {
      threshold: 0.8,
    });
    cardsObserver.observe(cardContainerRef.current);
  }, []);

  function showCards(entries, cardsObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardRefs.forEach((ref, index) => {
          setTimeout(() => {
            ref.current.classList.add('AboutMe-card--entered');
          }, 100 * index);
        });
        cardsObserver.unobserve(cardContainerRef.current);
      }
    });
  }

  return (
    <section className="AboutMe">
      <h1 className="AboutMe-title"> About Me </h1>
      <div className="AboutMe-cardContainer" ref={cardContainerRef}>
        <Card
          title="Computer Engineering"
          text="At McGill Univerity, I have learned a wide variety of topics ranging
            from microelectronics to operating systems. I worked on many
            different projects including a File System, a Pipelined processor,
            an AM receiver, a humidity-sensing RFID, etc..."
          ref={cardRefs[0]}
          img="assets/icon1.png"
        />
        <Card
          title="Web Development"
          text=" I love designing websites using Moderm Front-End libraries like
            React and Angular. Most of the web apps I have created use Node.js
            on the Back-End, and are hosted on a Linux VM on Google Compute
            Engine. I am currently learning Golang and trying to become more
            familiar with the Google Cloud features."
          ref={cardRefs[1]}
          img="assets/icon2.png"
        />
        <Card
          title="Software Engineering"
          text="My passion for problem solving, and computers, combined with desire
            to create things has naturally led me to programming. I attach a lot
            of importance to clean, organized, and well-tested code. I also
            always try to optimize what is optimizable."
          ref={cardRefs[2]}
          img="assets/icon3.png"
        />
      </div>
    </section>
  );
};

export default AboutMe;
