import React, { useEffect } from "react";
import DashboardStyle from "./Dashboard.Style";
import facebook from "../../common/Assets/facebook.jpg";
import blognepal from "../../common/Assets/blognepal.jpg";
import stock from "../../common/Assets/stock.jpg";
import { Link } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    console.log("dashbord rendiring");
  });
  return (
    <DashboardStyle>
      <div id="dashboard">
        <div id="portfolio">
          <p>PORTFOLIO</p>
        </div>
        <div className="portfolio-list">
          <div className="port">
            <img src={facebook} alt="" />
            <Link to="https://github.com/rishikeshkhakurel/facebook-clone">
              <p className="title">Facebook Clone</p>
            </Link>
            <p>Facebook Dashboard and Profile page clone.</p>
          </div>
          <div className="port">
            <img src={blognepal} alt="" />
            <Link to="https://github.com/thebugslay3r/blogNEPAL">
              <p className="title">BlogNepal</p>
            </Link>
            <p>BlogNepal where you can post Blog.</p>
          </div>
        </div>
        <div className="portfolio-list">
          <div className="port">
            <img src={stock} alt="" />
            <Link to="https://github.com/rishikeshkhakurel/apple-stock-clone">
              <p className="title">Stock Clone</p>
            </Link>
            <p>Apple stock clone dark theme.</p>
          </div>
          <div className="port" style={{ visibility: "hidden" }}>
            <img src={stock} alt="" />
            <p>Stock Clone</p>
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
}

export default Dashboard;
