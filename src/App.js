import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Route, Switch } from "react-router-dom";

import Header from "./components/common/Header"; 
import HomePage from "./components/home/HomePage";
import Projects from "./components/projects/Projects";   
import ProjectDetails from "./components/projects/ProjectDetails";
import Contact from "./components/contact/Contact"; 
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="container text-center">
                
      <Header /> 

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/project-details" component={ProjectDetails} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    
    </div>
  );
}

export default App;
