/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import type { ProjectProps } from "../Project";
import Link from "next/link";
import Nav from "../Nav";
import styles from "./Portfolio.module.css";
import image_1 from "../../../public/commercial_projects/IMG_5468.jpg";
import image_2 from "../../../public/commercial_projects/IMG_5469.png";
import image_3 from "../../../public/commercial_projects/IMG_5470.png";
import image_4 from "../../../public/commercial_projects/IMG_5471.png";

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
        <div>
          <div className="py-4">
            <h2>Commercial projects</h2>
          </div>
          <div className="py-9 border-b border-b-[rgba(51, 50, 61, 0.15)]">
            <div className="bg-[#33323D] p-3 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
              <motion.div
                animate={{
                  scale: [0.98, 1, 0.98],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                  },
                }}
                className="w-full h-full flex justify-center items-center"
              >
                <img src={image_1.src} alt="" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [0.98, 1, 0.98],
                  transition: {
                    duration: 0.6,
                    delay: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                  },
                }}
                className="w-full h-full flex justify-center items-center"
              >
                <img src={image_2.src} alt="" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [0.98, 1, 0.98],
                  transition: {
                    duration: 0.6,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                  },
                }}
                className="w-full h-full flex justify-center items-center"
              >
                <img src={image_3.src} alt="" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [0.98, 1, 0.98],
                  transition: {
                    duration: 0.6,
                    delay: 1.8,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                  },
                }}
                className="w-full h-full flex justify-center items-center"
              >
                <img src={image_4.src} alt="" />
              </motion.div>
            </div>
            <Link href={`${url}/campaigns`} className="btn mt-9 mx-auto">
              Learn more
            </Link>
          </div>
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
