/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Project.module.css";
import { motion } from "framer-motion";

export type ProjectProps = {
  key: Number;
  name: string;
  color: string;
  description: string;
  technologies: string;
  url: string;
  background: string;
};

const Project = ({ activeProject }: { activeProject: ProjectProps }) => {
  return (
    <motion.div
      className={styles.project_page}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0)",
        transition: { duration: 0.3, delay: 0.2 },
      }}
    >
      <div
        className={styles.project_hero}
        style={{ backgroundColor: activeProject.color }}
      >
        <img
          className={styles.img_1}
          src={`/project-images/${activeProject.name.toLowerCase()}.png`}
          alt=""
        />
        <img
          className={styles.img_2}
          src={`/project-images/${activeProject.name.toLowerCase()}.png`}
          alt=""
        />
      </div>
      <div className={styles.project_overview}>
        <div className={styles.left}>
          <h2>{activeProject.name}</h2>
          <p>{activeProject.description}</p>
          <p className={styles.green}>{activeProject.technologies}</p>
          <a href={activeProject.url} target="_blank" className="btn">
            Visit website
          </a>
        </div>
        <div className={styles.right}>
          <h3>Project Background</h3>
          <p>{activeProject.background}</p>
          <h3>Static Previews</h3>
          <div className={styles.previews}>
            <div
              className={styles.preview}
              style={{ backgroundColor: activeProject.color }}
            >
              <img
                src={`/static-images/${activeProject.name.toLowerCase()}-static-1.png`}
                alt=""
              />
            </div>
            <div
              className={styles.preview}
              style={{ backgroundColor: activeProject.color }}
            >
              <img
                src={`/static-images/${activeProject.name.toLowerCase()}-static-2.png`}
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
