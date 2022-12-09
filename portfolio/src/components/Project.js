import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Project = ({ activeProject }) => {
  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0)",
        transition: { duration: 0.3 },
        delay: 0.2,
      }}
    >
      <div
        className="project-hero"
        style={{ backgroundColor: activeProject.color }}
      >
        <img
          className="img-1"
          src={`../project-images/${activeProject.name.toLowerCase()}.png`}
          alt=""
        />
        <img
          className="img-2"
          src={`../project-images/${activeProject.name.toLowerCase()}.png`}
          alt=""
        />
      </div>
      <div className="project-overview">
        <div className="left">
          <h2>{activeProject.name}</h2>
          <p>{activeProject.description}</p>
          <p className="green">{activeProject.technologies}</p>
          <a href={activeProject.url} target="_blank" className="btn">
            Visit website
          </a>
        </div>
        <div className="right">
          <h3>Project Background</h3>
          <p>{activeProject.background}</p>
          <h3>Static Previews</h3>
          <div className="previews">
            <div
              className="preview"
              style={{ backgroundColor: activeProject.color }}
            >
              <img
                src={`../static-images/${activeProject.name.toLowerCase()}-static-1.png`}
                alt=""
              />
            </div>
            <div
              className="preview"
              style={{ backgroundColor: activeProject.color }}
            >
              <img
                src={`../static-images/${activeProject.name.toLowerCase()}-static-2.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
