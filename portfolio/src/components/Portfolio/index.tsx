"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import type { ProjectProps } from "../Project";
import Link from "next/link";
import Nav from "../Nav";
import styles from "./Portfolio.module.css";

const Portfolio = ({ projects }: { projects: ProjectProps[] }) => {
  const [url, setUrl] = useState("/portfolio");

  const portfolio = projects.map((project: ProjectProps) => {
    return <ProjectPreview project={project} url={url} key={project.name} />;
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [portfolio]);

  return (
    <motion.div className={styles.portfolio}>
      <Nav />
      <motion.div
        className={styles.projects}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0)",
          transition: { duration: 0.3, delay: 0.2 },
        }}
      >
        <div className="py-4">
          <h2>Commercial projects</h2>
          <p>Coming soon</p>
        </div>
      </motion.div>
      {url ? (
        <motion.div
          className={styles.projects}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0)",
            transition: { duration: 0.3, delay: 0.2 },
          }}
        >
          <div className="py-6">
            <h2>Personal projects</h2>
            <p className="italic font-light">2020-2022</p>
          </div>
          <motion.div>{portfolio}</motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default Portfolio;

const ProjectPreview = ({
  project,
  url,
}: {
  project: ProjectProps;
  url: string;
}) => {
  const refImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return (
    <div className={styles.project} key={`${project.key}`} ref={refImage}>
      <div
        className={styles.project_image}
        style={{ backgroundColor: project.color }}
      >
        <motion.img
          src={`/project-images/${project.name.toLowerCase()}.png`}
          alt=""
          style={{ y: y }}
        />
      </div>
      <motion.div className={styles.project_text_container}>
        <motion.div className={styles.project_text}>
          <motion.div style={{ y: yText, opacity: opacity }}>
            <h2 className={styles.project_name}>{project.name}</h2>
            <p className={styles.project_description}>{project.description}</p>
            <Link href={`${url}/${project.name.toLowerCase()}`} className="btn">
              View Project
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
