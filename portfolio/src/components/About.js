import React, { useRef } from "react";
import "./About.css";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const refImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      className="about"
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
      <motion.div className="picture-container">
        <motion.div style={{ y: y }} className="picture"></motion.div>
      </motion.div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          My full name is Barbora, but since childhood, everybody just calls me
          Bara. I’m a junior front-end developer looking for a new role in an
          exciting company. I mostly use React.js, but I can adapt to whatever
          tools are required. I’m currently based in London, UK, but I’m also
          happy working remotely. I’d love for you to check out my work.
        </p>
        <a href="/portfolio" className="btn">
          Go to portfolio
        </a>
      </div>
    </motion.div>
  );
};

export default About;
