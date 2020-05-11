import React from "react";
import { NavLink } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import './Header.css'

const Header = () => {
  const activeStyle = { color: "#000", fontWeight: "bold"};
  return (
    <nav>
      <div className="row">
        
        <div className="col-md-4">
          <NavLink to="/" activeStyle={activeStyle} exact>
            Mohamed Khaled Yousef
          </NavLink>
        </div>

        <div className="col-md-3">
          <DarkMode />
        </div>

        <div className="col-md-5">
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/projects" activeStyle={activeStyle}>
            Projects
          </NavLink>        
          {" | "}
          <NavLink to="/contact" activeStyle={activeStyle}>
            Contact
          </NavLink>
        </div>
      </div>
      <hr />
    </nav>
    
  );
};

export default Header;
