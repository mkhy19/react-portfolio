/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './Project.css'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';
import { FaHandPointLeft } from 'react-icons/fa';

export default class Copyright extends Component {

  render () {
    //const props = this.props

    return (
        <div className="container-fluid text-center">
          <div className="text-center animatedLoad" style={{animationDelay: '2.75s', marginTop: '5%'}}>
            <h2 className="checkgethub" >To see a full directory of another projects, Check out my 
                <a target="_blank" className="checkhover" href="https://github.com/mkhy19"> GitHub 
                    <FaHandPointLeft />
                </a>
            </h2>

            <a target="_blank" href="https://www.linkedin.com/in/mohamed-khaled-yousef-421081a5/">
                {/* <i className="fab fa-linkedin-in social-media"></i> */}
                <AiFillLinkedin className="social-media"/>
            </a>
            <a target="_blank" href="https://twitter.com/mkhy_19">
                <i className="fab fa-twitter social-media"></i>
                <AiFillTwitterSquare className="social-media"/>
            </a>
            <a target="_blank" href="https://github.com/mkhy19">
                <i className="fab fa-github social-media"></i>
                <AiFillGithub className="social-media"/>

            </a>
            <h3 className="lead text-center" style={{marginTop: '1%', marginBottom: '3%', fontSize: '16px'}}>Copyright ©May 2020. Made by Mohamed Khaled Yousef</h3>
          </div>
          
        </div>

    )
  }
}    


