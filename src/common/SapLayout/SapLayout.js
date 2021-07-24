import React from "react";
import SideNavbar from "../../component/SideNavbar/SideNavbar";

function SapLayout(props) {
  return (
    <div>
      <SideNavbar />
      <div>{props.children}</div>
    </div>
  );
}

export default SapLayout;
