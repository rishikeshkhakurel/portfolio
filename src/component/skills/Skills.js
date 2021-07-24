import React from "react";
import SkillsStyle from "./Skills.Style";
import { AiFillStar } from "react-icons/ai";

function Skills(props) {
  var rows = [];
  for (var i = 0; i < props.num; i++) {
    rows.push(1);
  }
  return (
    <SkillsStyle>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        {rows.map(() => (
          <AiFillStar />
        ))}
      </div>
    </SkillsStyle>
  );
}

export default Skills;
