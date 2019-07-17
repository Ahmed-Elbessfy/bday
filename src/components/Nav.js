import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="brand">bday</div>
        <ul>
          <li>
            <NavLink to="/users">users</NavLink>
          </li>
          <li>
            <NavLink to="#">gifts</NavLink>
          </li>
          <li>
            <NavLink to="#">notifications</NavLink>
          </li>
          <li>
            <NavLink to="#">profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
