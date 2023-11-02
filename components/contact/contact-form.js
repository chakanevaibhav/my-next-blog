import React, { useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json", // Corrected "Content-Type"
      },
    });
    setSuccess(true);
  };

  return (
    <>
      {success && (
        <Notification
          title="Success"
          message="Details submitted sucessfully"
          status="success"
        />
      )}
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                required
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your name</label>
              <input
                type="name"
                id="name"
                required
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
