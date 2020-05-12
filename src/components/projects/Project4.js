/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Project.css'

export default class Project4 extends Component {

  render () {
    const props = this.props

    return (
        <div className="container-fluid text-center">

        <div className="card card-inverse view overlay animatedLoad"  style={{animationDelay: '2s'}}>
            <img className="card-img card-img-top" src={props.imgUrl} />
            <div className="card-img-overlay" style={{backgroundColor: '#feefea'}}>
                <div className="vertical-align-center">
                <h2 className="text-center display-4 project-name">{props.projectName}</h2>                 
                <p className="text-center lead project-about">{props.aboutProject}</p>
                <div className="buttons">
                    <a className="button" target="_blank" href={props.projectSource}>SOURCE</a>
                    <a className="button" target="_blank" href={props.projectDemo}>DEMO</a>
                </div>
                </div>
            </div>
        </div>

        </div>

    )
  }
}    


