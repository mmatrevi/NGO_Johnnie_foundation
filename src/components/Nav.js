import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="logo" style={{ marginLeft: "20px" }}>
        <p>The Johnnie Foundation</p>
      </div>
      <div className="Links">
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </div>
        <div>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
