"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const myServiceId = "service_a83buk9";
const myPublicKey = "aT6epO9whZ9Nb2BLP";
const myTemplateId = "template_vd7ex4p";

export const ContactForm = () => {
  const [modalYes, setModalYes] = useState(false);
  const [textModal, setTextModal] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(myServiceId, myTemplateId, form.current, myPublicKey)
        .then(
          (result) => {
            console.log(result.text);
            setModalYes(true);
            setTextModal("Thank you for reaching out!");
            setName("");
            setMail("");
            setText("");
          },
          (error) => {
            console.log(error.text);
            setModalYes(true);
            setTextModal(
              "Unfortunatelly your message could not be sent. Please try again. If the problem continues, please contact me through LinkedIn",
            );
          },
        );
    }
  };

  return (
    <section id="contact-form" className={styles.row}>
      <h2>Contact Me</h2>
      <div
        className={styles.modal}
        style={modalYes ? { display: "flex" } : { display: "none" }}
      >
        {textModal}
        <button
          className="btn btn-message btn-message-modal"
          onClick={() => setModalYes(false)}
        >
          Close
        </button>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={
          modalYes ? `${styles.fade} ${styles.row_text}` : styles.row_text
        }
      >
        <div className={styles.form_field}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Jane Smith"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.form_field}>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="jane.smith@somewhere.com"
            id="mail"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>
        <div className={styles.form_field}>
          <label>Message</label>
          <textarea
            name="message"
            id="text"
            cols={30}
            rows={10}
            placeholder="How can I help?"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <button
          type="submit"
          value="Send"
          className={`btn ${styles.btn_message}`}
          disabled={name && mail && text ? false : true}
        >
          Send
        </button>
      </form>
    </section>
  );
};
