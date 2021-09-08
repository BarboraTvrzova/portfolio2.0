import React from 'react'
import "./Contact.css"
import Nav from "../components/Nav"
import twitter from "../images/icons/twitter.svg"
import git from "../images/icons/github.svg"
import linkedin from "../images/icons/linkedin.svg"

const Contact = () => {
  return (
    <div className="contact">
      <Nav />
      <div className="contact-details">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="row-text">
           <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
           <div className="icons">
             <img src={twitter} alt="" />
             <img src={git} alt="" />
             <img src={linkedin} alt="" />
           </div>
          </div>
        </div>
        <div className="row">
          <h2>Contact Me</h2>
          <form action="" className="row-text">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Jane Smith"/>
          </div>
          <div className="form-field">
            <label htmlFor="mail">Email Address</label>
            <input type="mail" placeholder="jane.smith@somewhere.com" id="mail"/>
          </div>
          <div className="form-field">
            <label htmlFor="text">Message</label>
            <textarea name="text" id="text" cols="30" rows="10" placeholder="How can I help?"></textarea>
          </div>
          <div className="btn btn-message">Send message</div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
