import React from 'react'
import "./Footer.css"
import whitelogo from "../images/bara-logo-white.svg"
import git from "../images/icons/github.svg"
import twitter from "../images/icons/twitter.svg"
import linkedin from "../images/icons/linkedin.svg"


const Footer = () => {

  const pathname = window.location.pathname
  

  return (
    <footer>
      <div className={ pathname==="/contact" ? "hide" : "interested" } >
        <h2>Interested in doing a project together?</h2>
        <div className="line"></div>
        <a href="/contact" className="btn">Contact me</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <nav className="footer-nav">
            <div className="logo-white"><img src={whitelogo} alt="" /></div>
            <ul className="footer-nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact me</a></li>
            </ul>
          </nav>
          <div className="icons">
            <img src={git} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer