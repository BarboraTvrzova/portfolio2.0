/* eslint-disable @next/next/no-img-element */
"use client";
import whitelogo from "../../../public/images/bara-logo-white.svg";
import git from "../../../public/images/icons/github.svg";
import linkedin from "../../../public/images/icons/linkedin.svg";
import styles from "./Footer.module.css";
import Link from "next/link";
import Svg from "react-inlinesvg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer>
      {pathName !== "/contact" ? (
        <div className={styles.interested}>
          <h2>Interested in doing a project together?</h2>
          <div className={styles.line}></div>
          <a href="/contact" className="btn">
            Contact me
          </a>
        </div>
      ) : null}

      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_inner}>
          <nav className={styles.footer_nav}>
            <div className={styles.logo_white}>
              <Link href="/">
                <img src={whitelogo.src} alt="" />
              </Link>
            </div>
            <ul className={styles.footer_nav_links}>
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
          <div className={styles.icons}>
            <a href="https://github.com/BarboraTvrzova" target="_blank">
              <Svg src={git.src} />
            </a>

            <a
              href="https://www.linkedin.com/in/barbora-torres-1744741bb/"
              target="_blank"
            >
              <Svg src={linkedin.src} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
