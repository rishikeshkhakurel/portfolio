import React from "react";
import ResumeStyle from "./Resume.Style";
import cv from "../../common/Assets/rishikesh_cv.pdf";

function Resume() {
  return (
    <ResumeStyle>
      <div id="resume">
        <embed src={cv} width="90%" height="890px" />
      </div>
    </ResumeStyle>
  );
}

export default Resume;
