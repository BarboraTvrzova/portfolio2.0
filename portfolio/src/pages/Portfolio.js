import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import Nav from "../components/Nav";
import Project from "../components/Project";
import { motion, useTransform, useScroll } from "framer-motion";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Portfolio = ({ projects, showProject, activeProject }) => {
  let { url } = useRouteMatch();

  const portfolio = projects.map((project) => {
    console.log(project);
    return (
      // <div className="project" key={project.key}>
      //   <div
      //     className="project-image"
      //     style={{ backgroundColor: project.color }}
      //   >
      //     <motion.img
      //       src={`../project-images/${project.name.toLowerCase()}.png`}
      //       alt=""
      //       style={{ y: y }}
      //     />
      //   </div>
      //   <div className="project-text-container">
      //     <div className="project-text">
      //       <h2 className="project-name">{project.name}</h2>
      //       <p className="project-description">{project.description}</p>
      //       <Link
      //         to={`${url}/${project.name.toLowerCase()}`}
      //         className="btn"
      //         onClick={() => {
      //           showProject(project);
      //         }}
      //       >
      //         View Project
      //       </Link>
      //     </div>
      //   </div>
      // </div>
      <ProjectShit project={project} showProject={showProject} url={url} />
    );
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [portfolio]);

  return (
    <motion.div className="portfolio">
      <Nav />
      <motion.div
        className="projects"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0)",
          transition: { duration: 0.3 },
          delay: 0.2,
        }}
      >
        {/* {!activeProject? portfolio : <Project activeProject={activeProject}/>} */}
        <Switch>
          <Route
            isExact
            path={`${url}/:${
              activeProject ? activeProject.name.toLowerCase() : ""
            }`}
          >
            <Project activeProject={activeProject} />
          </Route>
          <Route isExact path={url}>
            <motion.div>{portfolio}</motion.div>
          </Route>
        </Switch>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

const ProjectShit = ({ project, showProject, url }) => {
  const refImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return (
    <div className="project" key={project.key} ref={refImage}>
      <div className="project-image" style={{ backgroundColor: project.color }}>
        <motion.img
          src={`../project-images/${project.name.toLowerCase()}.png`}
          alt=""
          style={{ y: y }}
        />
      </div>
      <motion.div className="project-text-container">
        <motion.div className="project-text">
          <motion.div style={{ y: yText, opacity: opacity }}>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <Link
              to={`${url}/${project.name.toLowerCase()}`}
              className="btn"
              onClick={() => {
                showProject(project);
              }}
            >
              View Project
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
