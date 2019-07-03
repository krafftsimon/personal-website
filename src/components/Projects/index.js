import React from 'react';
import Card from './Card';
import './index.scss';

const Projects = () => {
  return (
    <section className="Projects">
      <div className="Projects-container">
        <h1 className="Projects-title"> Experience / Projects </h1>
        <div className="Projects-list">
          <Card
            title="AlgoExpert"
            description="Online coding Platform."
            liveUrl="https://www.algoexpert.io"
            img="assets/algoexpert.png"
          />
          <Card
            title="Bodybuilding.com"
            description="Online supplement store &amp; fitness community."
            liveUrl="https://www.bodybuilding.com/"
            img="assets/bodybuilding.jpg"
          />
          <Card
            title="React Boilerplate"
            description="React boilerplate with redux, webpack 4, and babel."
            githubUrl="https://www.github.com/krafftsimon/react-boilerplate"
            img="assets/boilerplate.jpg"
          />
          <Card
            title="Fractal-Renderer"
            description="Web application to visualize the Mandelbrot set."
            githubUrl="https://www.github.com/krafftsimon/fractal-renderer"
            liveUrl="http://fractal.krafftsimon.com"
            img="assets/fractal.jpg"
          />
          <Card
            title="Pipelined Processor"
            description="MIPS pipelined processor with 5 stages and coded using VHDL."
            githubUrl="https://www.github.com/krafftsimon/ECSE425_GROUP5"
            img="assets/processor.jpg"
          />
          <Card
            title="Humidity Sensing RFID"
            description="Practical Radio-Frequency Identification Device (RFID), capable of detecting changes in humidity."
            liveUrl="../assets/RFID_Poster_Presentation.pdf"
            img="assets/rfid.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
