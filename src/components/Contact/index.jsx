import React, { useState, useEffect } from "react";
import "./index.scss";
import Heading from "../Utils/Heading";
import contact from "../../assets/images/contact.svg";
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <Heading
          letterClass={letterClass}
          idx={5}
          strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e", "."]}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          consectetur odit. Natus ad assumenda iusto quae nesciunt esse iure,
          unde reprehenderit molestiae ipsa quibusdam repudiandae.
        </p>
        <form className="form-container">
          <div className="row">
            <div className="form-group">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Full Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea
                placeholder="Enter Message"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <button className="btn-flat">Submit</button>
          </div>
        </form>
      </div>
      <div className="contact-image">
        <img src={contact} />
      </div>
    </div>
  );
};

export default Contact;
