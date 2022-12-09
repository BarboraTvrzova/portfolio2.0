import React from "react";
import "./Nav.css";
import logo from "../images/bara-logo.svg";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.1 },
      }}
    >
      <nav className="main-nav">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.4,
              type: "spring",
              bounce: 0.7,
            },
          }}
        >
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
        </motion.div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
