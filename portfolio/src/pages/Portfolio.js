import React, { useState, useEffect } from 'react'
import "./Portfolio.css"
import Nav from "../components/Nav"
import Project from "../components/Project"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from "react-router-dom";

const Portfolio = ({ projects, showProject, activeProject }) => {

  
  let { url } = useRouteMatch();

  console.log(url)

  const portfolio = projects.map((project) => {
    

    return (
      <div className="project" key={project.key}>
        <div className="project-image" style={{ backgroundColor: project.color }}>
          <img src={`../project-images/${project.name.toLowerCase()}.png`} alt="" />
        </div>
        <div className="project-text-container">
          <div className="project-text">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <Link to={`${url}/${project.name.toLowerCase()}`} className="btn" onClick={() => { showProject(project) }}>View Project</Link>

          </div>
        </div>
      </div>
    ) 
  })

  useEffect(() => {
    window.scroll(0, 0)

  }, [portfolio])

  return (
    <div className="portfolio">
      <Nav />
      <div className="projects">
        {/* {!activeProject? portfolio : <Project activeProject={activeProject}/>} */}
        <Switch>
         <Route isExact path={`${url}/:${activeProject? activeProject.name.toLowerCase() : ""}`} >
            <Project activeProject={activeProject}/>
          </Route>
          <Route isExact path={url}> 
            {portfolio}
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Portfolio

