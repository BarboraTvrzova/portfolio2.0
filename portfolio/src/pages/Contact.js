import React from 'react'
import "./Contact.css"
import Nav from "../components/Nav"
import twitter from "../images/icons/twitter.svg"
import git from "../images/icons/github.svg"
import linkedin from "../images/icons/linkedin.svg"
import { ContactUs } from '../components/ContactUs'

const Contact = () => {
  return (
    <div className="contact">
      <Nav />
      <div className="contact-details">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="row-text">
           <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London but I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
           <div className="icons">
           <a href="https://github.com/BarboraTvrzova" target="_blank"><img src={git} alt="" /></a>
            <a href="https://twitter.com/BTvrzova" target="_blank"><img src={twitter} alt="" /></a>
            <a href="https://www.linkedin.com/in/barbora-torres-1744741bb/" target="_blank"><img src={linkedin} alt="" /></a>

           </div>
          </div>
        </div>
    
        <ContactUs />
        
      </div>
      
    </div>
  )
}

export default Contact
