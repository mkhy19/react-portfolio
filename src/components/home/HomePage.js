/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
//import { Link } from "react-router-dom";
import './HomePage.css'
import About  from '../about/About'
import Projects  from '../projects/Projects'
import Contact  from '../contact/Contact'

const HomePage = () => (
  <div className="">
      <About />
      <hr />

      <Projects />
      <hr />

      <Contact />


    </div>  

);

export default HomePage;
