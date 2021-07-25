import React from "react";
import ResumeStyle from "./Resume.Style";
import cv from "../../common/Assets/rishikesh_cv.pdf";

function Resume() {
  return (
    <ResumeStyle>
      <div id="resume">
        <div id="title">
          <p>RESUME</p>
        </div>
        <embed src={cv} id="pdf" />
      </div>
    </ResumeStyle>
  );
}

export default Resume;
