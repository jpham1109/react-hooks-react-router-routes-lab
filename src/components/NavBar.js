import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "6px 12px 6px 6px",
  background: "lightblue",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "skyblue"}}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={{background: "skyblue"}}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={{background: "skyblue"}}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={{background: "skyblue"}}>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
