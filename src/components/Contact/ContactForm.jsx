import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_jlno31e";
const TEMPLATE_ID = "template_k7rd4h8";
const USER_ID = "user_BFxivxMgtUqdcNFeQwx15";

function ContactForm({ validationHandler }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, phone, email, message);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      (result) => {
        validationHandler("Email sent.");
      },
      (error) => {
        validationHandler("Error. Please try again!");
      }
    );

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        onChange={nameHandler}
        value={name}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        onChange={emailHandler}
        value={email}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        id="phone"
        name="phone"
        onChange={phoneHandler}
        value={phone}
        required
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your message..."
        onChange={messageHandler}
        value={message}
        rows="8"
        required
      />
      <input type="submit" value="SEND" id="submit" />
    </form>
  );
}

export default ContactForm;
