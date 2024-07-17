/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Nav.module.css";
import logo from "../../../public/images/bara-logo.svg";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <nav className={styles.main_nav} aria-label="navigation primary">
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
          <div className={styles.logo}>
            <Link href="/">
              <img src={logo.src} alt="Bara T." />
            </Link>
          </div>
        </motion.div>
        <ul className={styles.nav_links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
