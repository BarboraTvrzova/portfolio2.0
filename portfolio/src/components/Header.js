import React from 'react'
import "./Header.css"
import Nav from "./Nav"
import arrow from "../images/icons/down-arrows.svg"

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="hero">
        <div className="my-project"></div>
        <div className="hero-text">
          <h1>Hey, I’m Barbora Tvrzova and I love building beautiful websites</h1>
          <a href="#about" className="btn btn-about">
            <div className="about-inner"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4" /><path opacity=".5" d="M0 5l8 4 8-4" /><path opacity=".25" d="M0 1l8 4 8-4" /></g></svg></div>
            About me</a>
        </div>

      </div>
    </header>
  )
}

export default Header
