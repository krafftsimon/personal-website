import React, { useState, useEffect, createRef } from 'react';
import chevronRight from 'assets/chevron-right.svg';
import menuBars from 'assets/menu-bars.svg';
import githubIcon from 'assets/github-icon.png';
import linkedInIcon from 'assets/linkedin-icon.png';
import resumeIcon from 'assets/resume-icon.svg';
import closeIcon from 'assets/close-icon.svg';
import './index.scss';

const codeLinesCount = 8;
const elementsToAnimate = 4;

const Intro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const codeLinesRef = Array.from({ length: codeLinesCount }, () =>
    createRef(),
  );
  const elementsRef = Array.from({ length: elementsToAnimate }, () =>
    createRef(),
  );
  const mobileMenuRef = createRef();
  const codeLines = [];

  useEffect(() => {
    codeLinesRef.forEach((ref, index) => {
      setTimeout(() => {
        ref.current.classList.add('Intro-codeLine--entered');
      }, 500 * index);
    });

    elementsRef.forEach((ref, index) => {
      setTimeout(() => {
        ref.current.classList.add(`${ref.current.classList[0]}--entered`);
      }, 200 * index);
    });
  }, []);

  function openMobileMenu() {
    setIsMenuOpen(true);
    document.addEventListener('click', closeMobileMenu);
  }

  function closeMobileMenu(e) {
    if (e.target.classList[0] === 'Intro-mobileMenu') return;
    setIsMenuOpen(false);
    document.removeEventListener('click', closeMobileMenu);
  }

  for (let i = 0; i < codeLinesCount; i++) {
    codeLines.push(
      <div
        className={`Intro-codeLine Intro-codeLine--${i}`}
        ref={codeLinesRef[i]}
      />,
    );
  }

  return (
    <section className="Intro">
      <div className="Intro-background">
        <div className="Intro-stripe1" />
        <div className="Intro-stripe2" />
      </div>
      <div className="Intro-container">
        <div className="Intro-illustration">{codeLines}</div>
        <div className="Intro-mobileMenuOpen" onClick={openMobileMenu}>
          <img className="Intro-mobileMenuOpenIcon" src={menuBars} />
        </div>
        <div
          className={`Intro-mobileMenu ${
            isMenuOpen ? 'Intro-mobileMenu--opened' : ''
          }`}
          ref={mobileMenuRef}>
          <div className="Intro-mobileMenuClose">
            <img src={closeIcon} className="Intro-mobileMenuCloseIcon" />
          </div>
          <div className="Intro-mobileMenuSpacer" />
          <a
            className="Intro-mobileMenuBtn"
            target="_blank"
            href="https://www.github.com/krafftsimon">
            <img
              className="Intro-mobileMenuIcon"
              src={githubIcon}
              alt="github logo"
            />
            <span className="Intro-mobileMenuText">Github</span>
          </a>
          <a
            className="Intro-mobileMenuBtn"
            target="_blank"
            href="https://www.linkedin.com/in/krafftsimon">
            <img
              className="Intro-mobileMenuIcon"
              src={linkedInIcon}
              alt="linkedin logo"
            />
            <span className="Intro-mobileMenuText">Linkedin</span>
          </a>
          <a
            className="Intro-mobileMenuBtn"
            target="_blank"
            href="../assets/RESUME.pdf">
            <img
              className="Intro-mobileMenuIcon"
              src={resumeIcon}
              alt="resume icon"
            />
            <span className="Intro-mobileMenuText">Resume</span>
          </a>
        </div>
        <header className="Header">
          <div className="Header-logo">SK</div>
          <div className="u-flexSpacer" />
          <div className="Header-navContainer">
            <a
              className="Header-navBtn"
              target="_blank"
              href="../assets/RESUME.pdf">
              Resume
            </a>
            <a
              className="Header-navBtn"
              target="_blank"
              href="https://www.linkedin.com/in/krafftsimon">
              LinkedIn
            </a>
            <a
              className="Header-navBtn"
              target="_blank"
              href="https://www.github.com/krafftsimon">
              Github
            </a>
          </div>
        </header>
        <div className="Intro-profile">
          <h1 className="Intro-profileName" ref={elementsRef[0]}>
            Simon Krafft
          </h1>
          <h3 className="Intro-profileTitle" ref={elementsRef[1]}>
            Web-Developer / Software Engineer
          </h3>
          <button
            className="Intro-profileBtn"
            onClick={() => TweenLite.to(window, 1, { scrollTo: '#projects' })}
            ref={elementsRef[2]}>
            Experience
            <img className="Intro-chevronRight" src={chevronRight} />
          </button>
          <button
            className="Intro-profileBtn"
            onClick={() => TweenLite.to(window, 1, { scrollTo: '#contact' })}
            ref={elementsRef[3]}>
            Contact
            <img className="Intro-chevronRight" src={chevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
