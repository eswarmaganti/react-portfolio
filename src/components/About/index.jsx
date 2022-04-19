import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  faCss3,
  faGithubAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../Utils/Heading";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <Heading
          letterClass={letterClass}
          idx={5}
          strArray={["A", "b", "o", "u", "t", " ", "m", "e", "."]}
        />
        <p>
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p align="LEFT">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className="stage-cube-container">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5CD2F3" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJsSquare} color="#E9D44D" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faNodeJs} color="#73AF5D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faHtml5} color="#DD4B25" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3} color="#254BDD" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithubAlt} color="#F7F7F7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
