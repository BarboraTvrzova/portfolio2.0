/* eslint-disable @next/next/no-img-element */
"use client";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import git from "../../../public/images/icons/github.svg";
import linkedin from "../../../public/images/icons/linkedin.svg";
import styles from "./Contact.module.css";
import Svg from "react-inlinesvg";

export const ContactUs = ({ text }: { text: string }) => {
  return (
    <motion.div className={styles.contact}>
      <motion.div
        className={styles.contact_details}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0)",
          transition: { duration: 0.3, delay: 0.2 },
        }}
      >
        <section id="get-in-touch" className={styles.row}>
          <h2>Get in Touch</h2>
          <div className={styles.row_text}>
            <p>{text}</p>
            <div className={styles.icons}>
              <a
                href="https://github.com/BarboraTvrzova"
                target="_blank"
                aria-label="Github"
              >
                <Svg src={git.src} />
              </a>

              <a
                href="https://www.linkedin.com/in/barbora-torres-1744741bb/"
                target="_blank"
                aria-label="Linkedin"
              >
                <Svg src={linkedin.src} />
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </motion.div>
    </motion.div>
  );
};
