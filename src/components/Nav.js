import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar fixed-top bg-white"
      style={{ minHeight: "10vh", borderBottom: "2px solid #dcdcdc" }}
    >
      <div className="container">
        <div className="brand text-capitalize h1 text-danger">bday</div>
        <ul className="list-unstyled mb-0" style={{ display: "flex" }}>
          <li className="mr-3">
            <NavLink
              exact
              to="/"
              activeClassName="text-danger"
              className="text-capitalize text-secondary"
              style={{ fontSize: "1.2rem" }}
            >
              users
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              to="#"
              activeClassName="text-danger"
              className="text-capitalize text-secondary"
              style={{ fontSize: "1.2rem" }}
            >
              gifts
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              to="#"
              activeClassName="text-danger"
              className="text-capitalize text-secondary"
              style={{ fontSize: "1.2rem" }}
            >
              notifications
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              to="#"
              activeClassName="text-danger"
              className="text-capitalize text-secondary"
              style={{ fontSize: "1.2rem" }}
            >
              profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
