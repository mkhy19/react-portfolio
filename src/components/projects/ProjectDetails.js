//import { Link } from "react-router-dom";
import React from "react";
//import './ProjectDetails.css'

const ProjectDetails = (props) => {
    // console.log('Project Details : ')
     console.log(props.projectData)

    // console.log('Project Name : ')
    // console.log(props.projectData.projectName)

    // console.log('About Project : ')
    // console.log(props.projectData.aboutProject)

  return (
    <div>
        <h2>Project Details</h2>
        <div>Project Name: { props.projectData }</div> 
        <div>About Project: { props.aboutProject }</div> 
    </div>
    
  );
}; 
export default ProjectDetails

