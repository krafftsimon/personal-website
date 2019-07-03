import React from 'react';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './app.scss';

const App = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
