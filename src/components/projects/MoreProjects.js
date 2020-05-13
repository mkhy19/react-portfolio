/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Project.css'
// import Loadinggif from './images/loadinggif2.gif';

export default class MoreProjects extends Component {

  render () {
    //const props = this.props
    return (
        <div className="container-fluid text-center">

            <div className="card card-inverse view overlay animatedLoad" style={{animationDelay: '1.5s'}}>
                {/* <img className="card-img card-img-top" src={Loadinggif} /> */}

                <div className="card-img-overlay" style={{backgroundColor: '#feefea'}}> 
                <div className="vertical-align-center">
                    <h2 className="text-center display-4 project-name">More projects</h2>
                    <div className="tag-line text-center">
                        <a className="tag">Javascript</a>
                        <a className="tag">C++</a>
                        <a className="tag">Python</a>
                        <a className="tag">React</a>
                        <a className="tag">Angular</a>
                        <a className="tag">Computer vision</a>
                        <a className="tag">Unity - VR - AR</a>
                    </div>                  
                    <ul className="other-projects">
                        <li className="checkhover"><a href="https://github.com/mkhy19/CPlusPlusProjects" target="_blank">C++ Projects</a></li>  
                        <li className="checkhover"><a href="https://github.com/mkhy19/Products" target="_blank">Products App In Angular</a></li>  
                        <li className="checkhover"><a href="https://github.com/mkhy19/Fun-Python" target="_blank">Fun Projects In Python</a></li>
                        <li className="checkhover"><a href="https://github.com/mkhy19/Simple-Data-Driven-Web-App" target="_blank">Simple Data Driven Web App</a></li>  
                        <li className="checkhover"><a href="https://github.com/mkhy19/Crash-courses/tree/master/Computer%20vision/face%20detection%20-%20openvc" target="_blank">Computer vision: face detection & recognition</a></li>  
                        <li className="checkhover"><a href="https://github.com/mkhy19/Rubik-tracking" target="_blank">Computer vision: Rubik tracking </a><a className="tag" target="_blank" href="https://www.youtube.com/watch?v=8Bk_I_H8GlQ">Video</a></li>  
                        <li className="checkhover"><a href="https://github.com/mkhy19/Rubik-tracking" target="_blank">ZoomBies: VR Game using Unity3D </a><a className="tag" target="_blank" href="https://youtu.be/bIB9_T8JZ9E?list=WL">Video</a></li>              
                    </ul>

                </div>
            </div>
          </div>

        </div>

    )
  }
}    


