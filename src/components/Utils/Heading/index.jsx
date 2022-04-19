import React from "react";
import "./index.scss";
import AnimatedLetters from "../../AnimatedLetters";
const Heading = ({ letterClass, strArray, idx }) => {
  return (
    <h1>
      <AnimatedLetters
        strArray={strArray}
        idx={idx}
        letterClass={letterClass}
      />
    </h1>
  );
};

export default Heading;
