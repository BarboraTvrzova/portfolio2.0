/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import styles from "./HeroSection.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const refImage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImage,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-0%", "10%"]);

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        },
      }}
      className={styles.picture_container}
      id="hero"
    >
      <div className={styles.hero} ref={refImage}>
        <img
          src="/images/homepage/desktop/image-homepage-hero2@2x.jpeg"
          alt="Hero image"
          className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
        />
        <img
          src="/images/homepage/small-hero.jpeg"
          alt="Hero image"
          className="absolute top-0 left-0 w-full object-contain lg:hidden block"
        />
        <div className={styles.hero_text}>
          <h1>
            Hey, I’m Barbora Torres and I love building beautiful websites
          </h1>
          <Link href="#about" className={`btn ${styles.btn_about}`}>
            <div className={styles.about_inner}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
                  <path d="M0 9l8 4 8-4" />
                  <path opacity=".5" d="M0 5l8 4 8-4" />
                  <path opacity=".25" d="M0 1l8 4 8-4" />
                </g>
              </svg>
            </div>
            <span className="h-full text-white">About me</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
