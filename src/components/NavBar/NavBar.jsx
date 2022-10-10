import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-container flex w-4/5 mx-auto justify-between">
        <div className="nav-logo text-4xl">
          <Link to="/home">Quiz-challenge</Link>
        </div>
        <div className="nav-items text-xl p-3">
          <NavLink to="/home" className="mx-3">
            Home
          </NavLink>
          <NavLink to="/quiz" className="mx-3">
            Quiz
          </NavLink>
          <NavLink to="/statistics" className="mx-3">
            Statistics
          </NavLink>
          <NavLink to="/blog" className="mx-3">
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
