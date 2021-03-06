import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import { animateScroll as scroll } from "react-scroll";

import { DarkMode } from "./DarkMode";

const Header = () => {
  const activeStyle = { color: "rgb(148, 150, 9)", fontWeight: "bold"};
  return (
    <div className="container">
      <nav>
        <div className="row">
          
          <div className="col-md-4">
            <NavLink onClick={() => { scroll.scrollToTop()}} className="link" to="/" activeStyle={activeStyle}>
              Mohamed Khaled Yousef
            </NavLink> 
          </div>       
            
          <div className="col-md-2">
            <DarkMode />  
          </div>  
  
          <div className="col-md-6">
            <NavLink className="link" to="/" activeStyle={activeStyle} exact>
              Home
            </NavLink>
            {" | "}
            {/* onClick={() => window.scrollBy(0, 100)} */}
            <NavLink 
              className="link" 
              to="/projects" 
              activeStyle={activeStyle}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              onClick={() => { window.scrollBy(0, 100)}}
              >
              Projects
            </NavLink>

            {" | "}
            <NavLink onClick={() => { scroll.scrollToBottom()}} className="link" to="/contact" activeStyle={activeStyle}>
              Contact
            </NavLink>
          </div>
        </div>
        {/* <hr /> */}
      </nav>
    </div>
    
  );
};

export default Header;
