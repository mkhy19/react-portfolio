/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import './Project.css'
import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { Route } from "react-router-dom";
//import { render } from "react-dom";

export default function Project7(props) {
    console.log('project7 : ')
    console.log(props.projectData)
    return (
        <div className="container-fluid text-center">
            <div className="card card-inverse view overlay animatedLoad" style={{animationDelay: '1.5s'}}>
                <img className="card-img card-img-top" src={props.imgUrl} id="biggerCard" style={{width: '110%' }}/>
                <div className="card-img-overlay" style={{backgroundColor: '#2beeb6'}}>
                
                    <div className="vertical-align-center">
                        <h2 className="text-center display-4 project-name">{props.projectName}</h2>
                        <p className="text-center lead project-about">{props.aboutProject}</p>
                        <div className="buttons">
                            <Link className="button" target="_blank">
                                <Link className="link" to="/project-details" >
                                    DETAILS
                                    <Route 
                                    path="/project-details" 
                                    //component={() => <ProjectDetails projectData={props.projectData} />} 
                                    //component={ProjectDetails}
                                    render={() => <ProjectDetails projectData={ props.projectData } />}
                                    /> 
                                </Link>
                            </Link>
                            <a className="button" target="_blank" href={props.projectSource} >SOURCE</a>

                            <a className="button" target="_blank" href={props.projectDemo} >DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}    


