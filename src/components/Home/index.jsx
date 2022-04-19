import React, { useState, useEffect } from "react";
import "./index.scss";
import logoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import Logo from "../Logo";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["l", "o", "b", "o", "d", "a", "n"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logoTitle} alt="" />
          <AnimatedLetters
            strArray={nameArray}
            letterClass={letterClass}
            idx={15}
          />
          <br />
          <AnimatedLetters
            strArray={jobArray}
            letterClass={letterClass}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / React & React Native Developer </h2>

        <div>
          <Link to="/contact" className="flat-button">
            CONTACT
          </Link>
        </div>
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Home;
