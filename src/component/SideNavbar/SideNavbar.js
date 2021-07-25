import React, { useState } from "react";
import SideNavbarStyle from "./SideNavbar.Style";
import pp from "../../common/Assets/rishi.jpg";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function SideNavbar() {
  const [display, setDisplay] = useState(false);
  return (
    <SideNavbarStyle>
      <div id={display ? "open-icon-none" : "open-icon"}>
        <AiOutlineMenu onClick={(e) => setDisplay(true)} />
      </div>
      <div id={display ? "sidebar" : "sidebar-display"}>
        <div id="close-icon">
          <AiOutlineCloseCircle onClick={(e) => setDisplay(false)} />
        </div>
        <div id="image">
          <img src={pp} alt="" />
        </div>
        <div id="nameintro">
          <p id="name">Rishikesh Khakurel</p>
          <p id="intro">Full Stack Web Developer</p>
        </div>
        <div id="navbar">
          <Link to="/" className="a-tag" onClick={(e) => setDisplay(false)}>
            <div className="navbar-icon">
              <p>HOME</p>
            </div>
          </Link>
          <Link
            to="/portfolio"
            className="a-tag"
            onClick={(e) => setDisplay(false)}
          >
            <div className="navbar-icon">
              <p>PORTFOLIO</p>
            </div>
          </Link>
          <Link
            to="/resume"
            className="a-tag"
            onClick={(e) => setDisplay(false)}
          >
            <div className="navbar-icon">
              <p>RESUME</p>
            </div>
          </Link>
          <Link
            to="/contact"
            className="a-tag"
            onClick={(e) => setDisplay(false)}
          >
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
