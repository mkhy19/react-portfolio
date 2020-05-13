/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import './About.css'

import { GrReactjs } from "react-icons/gr";
import { FaVuejs, FaGitSquare, FaGithubAlt, FaPython} from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { DiGulp, DiRuby, DiCss3, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

import MyGif from './giphy.gif';

const About= () => (
  // <div className="main">
  <div className="container">
   
    <div className="row aboutme">
      <div className="col-md-12 col">
        <h2><mark>#AboutMe</mark></h2>
      </div>
    </div>
    <br />

    <div className="row detail">
      <div className="col-md-6 col">
        <h1>Mohamed Khaled Yousef</h1> <br />

        <mark>Frontend developer who interested in learning programming, technology <br /> and studying data structures and algorithms theory </mark> 
        <h3>Toolbox I used : <GrReactjs /> <FaVuejs /> <DiGulp /> <BsBootstrapFill /> <FaGitSquare /> <FaGithubAlt /> <DiHtml5/> <DiCss3 /></h3>
        <h3>Programming languages : <IoLogoJavascript /> <FaPython /> <DiRuby /></h3>
      </div>
       
      <div className="col-md-6 col">
        <iframe 
          src={MyGif}  
          width="480" 
          height="270" 
          frameBorder="0" 
          className="giphy-embed" 
          allowFullScreen>
        </iframe>
      </div>

    </div>

  </div>
);

export default About;
