import React from 'react'
import "./Nav.css"
import logo from "../images/bara-logo.svg"

const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="logo"><a href="/"><img src={logo} alt="" /></a></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact me</a></li>
      </ul>
    </nav>
  )
}

export default Nav
