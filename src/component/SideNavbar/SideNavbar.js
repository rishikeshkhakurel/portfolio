import React from "react";
import SideNavbarStyle from "./SideNavbar.Style";
import pp from "../../common/Assets/rishi.jpg";
import { Link } from "react-router-dom";

function SideNavbar(props) {
  return (
    <SideNavbarStyle>
      <div id="sidebar">
        <div id="image">
          <img src={pp} alt="" />
        </div>
        <div id="nameintro">
          <p id="name">Rishikesh Khakurel</p>
          <p id="intro">Full Stack Web Developer</p>
        </div>
        <div id="navbar">
          <Link to="/" className="a-tag">
            <div className="navbar-icon">
              <p>HOME</p>
            </div>
          </Link>
          <Link to="/portfolio" className="a-tag">
            <div className="navbar-icon">
              <p>PORTFOLIO</p>
            </div>
          </Link>
          <Link to="/resume" className="a-tag">
            <div className="navbar-icon">
              <p>RESUME</p>
            </div>
          </Link>
          <Link to="/contact" className="a-tag">
            <div className="navbar-icon">
              <p>CONTACT</p>
            </div>
          </Link>
        </div>
      </div>
    </SideNavbarStyle>
  );
}

export default SideNavbar;
