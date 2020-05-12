/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import Project7 from './Project7';
import Project5 from './Project5';
import Project4 from './Project4';
import MoreProjects from './MoreProjects'; 
import Copyright from './Copyright'; 

//import ReactWowImg from './images/React-Wow-In-Minia.png';
export default class Projects extends Component {
  state = {
    ReactWow: { 
      projectName: 'React-Wow-In-Minia',
      projectSource: 'https://github.com/mkhy19/React-Wow-In-Minia',
      projectDemo: 'https://jovial-benz-3c2189.netlify.com/',
      //imgUrl: './images/React-Wow-In-Minia.png',
      //imgUrl: '${process.env.PUBLIC_URL}/Images/projects/React-Wow-In-Minia.png',
      //imgUrl: {ReactWowImg},
      aboutProject: 'a simple web app that uses google map api to help users discovering some of the most famous tourist places in Minia city. Also user can search and filter the results he/she wants'
    },
    Restaurant: { 
      projectName: 'Restaurant Reviews App', 
      projectSource: 'https://github.com/mkhy19/Restaurant-Reviews-App',
      projectDemo: 'https://jovial-benz-3c2189.netlify.com/',
      aboutProject: 'A mobile-ready web application and responsive on different sized displays and accessible for screen reader use. Also it works offline.'
    },
    MyReads: { 
      projectName: 'MyReads Book App',
      projectSource: 'https://github.com/mkhy19/MyReads-A-Book-Tracking-App',
      projectDemo: 'https://github.com/mkhy19/MyReads-A-Book-Tracking-App',
      aboutProject: 'A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.'
    },
    Arcade: { 
      projectName: 'Arcade Game',
      projectSource: 'https://github.com/mkhy19/ArcadeGame',
      projectDemo: 'https://mkhy19.github.io/ArcadeGame/',
      aboutProject: 'In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. '
    }, 
    FacebookClone: { 
      projectName: 'Facebook Clone',
      projectSource: 'https://github.com/mkhy19/Facebook-Clone',
      projectDemo: 'https://mkhy19.github.io/Facebook-Clone/',
      aboutProject: 'Facebook one page clone of log in and home page.'
    },
    GuestBook: { 
      projectName: 'GuestBook',
      projectSource: 'https://github.com/mkhy19/GuestBookV1',
      projectDemo: 'https://mkhy19.github.io/GuestBookV1/',
      aboutProject: 'First version- of chat app with basic features like log in, create an account, Send, Edit, Delete, Update messages and replay to messages too'
    },         
    MemoryGame: { 
      projectName: 'Memory Game',
      projectSource: 'https://github.com/mkhy19/Memory-Game-Project',
      projectDemo: 'https://mkhy19.github.io/Memory-Game-Project/',
      aboutProject: 'The important thing in this project is how to use DOM JS, Events and Media Queries to build the game.'
    }
  } 

  render () {
    const project = this.state

    return (
      <div className="container-fluid main text-center">
          <hr />
          <h2><mark>Projects </mark></h2>
          
          <div className="row no-gutters">
            <div className="col-md-7">
              <Project7 
                projectData={project.ReactWow}
                projectName={project.ReactWow.projectName}
                projectSource={project.ReactWow.projectSource}
                projectDemo={project.ReactWow.projectDemo}
                imgUrl={project.ReactWow.imgUrl}
                aboutProject={project.ReactWow.aboutProject}/>
            </div>
            <div className="col-md-5">
              <Project5                   
                projectName={project.GuestBook.projectName}
                projectSource={project.GuestBook.projectSource}
                projectDemo={project.GuestBook.projectDemo}
                aboutProject={project.GuestBook.aboutProject}/>
            </div>   

            <div className="col-md-4">
              <Project4                   
                projectName={project.MyReads.projectName} 
                projectSource={project.MyReads.projectSource}
                projectDemo={project.MyReads.projectDemo}
                aboutProject={project.MyReads.aboutProject}/>
            </div>              
            <div className="col-md-4">
              <Project4                   
                projectName={project.Arcade.projectName} 
                projectSource={project.Arcade.projectSource}
                projectDemo={project.Arcade.projectDemo}
                aboutProject={project.Arcade.aboutProject}/>
            </div>                
            <div className="col-md-4">
              <Project4                   
                projectName={project.MemoryGame.projectName}
                projectSource={project.MemoryGame.projectSource}
                projectDemo={project.MemoryGame.projectDemo}
                aboutProject={project.MemoryGame.aboutProject}/>
            </div>  
            
            <div className="col-md-5">
              <Project5  
                projectName={project.FacebookClone.projectName}
                projectSource={project.FacebookClone.projectSource}
                projectDemo={project.FacebookClone.projectDemo}
                aboutProject={project.FacebookClone.aboutProject}/>
            </div>
            <div className="col-md-7">
              <Project7                     
                projectName={project.Restaurant.projectName}
                projectSource={project.Restaurant.projectSource}
                projectDemo={project.Restaurant.projectDemo}
                aboutProject={project.Restaurant.aboutProject}/>
            </div>

            <div className="col-md-6">
              <MoreProjects/>
            </div>
            <div className="col-md-6">
              <Copyright/>
            </div>
          </div>
      </div>
    )
  }
}    


