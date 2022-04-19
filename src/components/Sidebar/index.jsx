import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <img src={LogoS} alt="" />
        <img className="sub-logo" src={LogoSubtitle} alt="" />
      </Link>
      <nav>
        <NavLink exact="true" act to="/">
          <FontAwesomeIcon
            icon={faHome}
            activeClassName="active"
            color="#4d4d4e"
          />
        </NavLink>

        <NavLink exact="true" act to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" act to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
