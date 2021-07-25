import React from "react";
import AboutStyle from "./Aboout.Style";
import rishi from "../../common/Assets/rishi.png";
import { Link } from "react-router-dom";
import Skills from "../skills/Skills";

function About() {
  return (
    <AboutStyle>
      <div id="about">
        <div id="title">
          <p>ABOUT</p>
        </div>
        <div id="content">
          <div id="body">
            <div>
              <p id="name">Rishikesh Khakurel</p>
              <p id="desc">Jr Software Developer</p>
              <p id="intro">
                I'm a Junior Software Developer speclized in frontend and
                backend. With experience in different project. You can checkout
                my portfolio and have a look at my work.
              </p>
            </div>
            <div id="btn">
              <Link to="/portfolio">
                <button>View Portfolio</button>
              </Link>
              <Link to="/resume">
                <button id="resume">View Resume</button>
              </Link>
            </div>
            <div id="skill-list">
              <p id="skill-name">Skills</p>
              <div className="skills">
                <Skills name="HTML5" num="5" />
              </div>
              <div className="skills">
                <Skills name="CSS" num="5" />
              </div>
              <div className="skills">
                <Skills name="SASS" num="4" />
              </div>
              <div className="skills">
                <Skills name="JavaScript" num="5" />
              </div>
              <div className="skills">
                <Skills name="TypeScript" num="2" />
              </div>
              <div className="skills">
                <Skills name="React" num="4" />
              </div>
              <div className="skills">
                <Skills name="NodeJS" num="4" />
              </div>
              <div className="skills">
                <Skills name="MongoDB" num="4" />
              </div>
              <div className="skills">
                <Skills name="MySQL" num="5" />
              </div>
              <div className="skills">
                <Skills name="Figma" num="4" />
              </div>
              <div className="skills">
                <Skills name="Git GitHub" num="5" />
              </div>
              <div className="skills">
                <Skills name="Linux" num="4" />
              </div>
              <div className="skills">
                <Skills name="OWASP" num="4" />
              </div>
            </div>
          </div>
          <div id="image">
            <img src={rishi} alt="" />
          </div>
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;
