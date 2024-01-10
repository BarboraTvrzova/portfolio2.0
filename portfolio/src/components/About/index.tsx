"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./About.module.css";

const About = ({ description }: { description: string }) => {
  const refImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      className={styles.about}
      id="about"
      ref={refImage}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          delay: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div className={styles.picture_container}>
        <motion.div style={{ y: y }} className={styles.picture}></motion.div>
      </motion.div>
      <div className={styles.about_text}>
        <h2>About Me</h2>
        <p>{description}</p>
        <a href="/portfolio" className="btn">
          Go to portfolio
        </a>
      </div>
    </motion.div>
  );
};

export default About;
