import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="picture">
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          My full name is Barbora, but since childhood, everybody just calls me Bara. I’m a junior front-end developer looking for a new role in an exciting company.
          I mostly use React.js, but I can adapt to whatever tools are required.
          I’m currently based in Czech Republic, but I’m happy working remotely.
          I’d love for you to check out my work.
        </p>
        <a href="/portfolio" className="btn">Go to portfolio</a>
      </div>

    </div>
  )
}

export default About
