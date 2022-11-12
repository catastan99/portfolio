import React from "react";
import { useState } from "react";
import styles from "./contact.module.scss";
import ContactForm from "./ContactForm";

function Contact() {
  const [validationMessage, setValidationMessage] = useState("");

  const validationHandler = (message) => {
    setValidationMessage(message);
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#116466"
          fillOpacity="1"
          d="M0,128L24,149.3C48,171,96,213,144,229.3C192,245,240,235,288,213.3C336,192,384,160,432,154.7C480,149,528,171,576,186.7C624,203,672,213,720,208C768,203,816,181,864,170.7C912,160,960,160,1008,154.7C1056,149,1104,139,1152,138.7C1200,139,1248,149,1296,160C1344,171,1392,181,1416,186.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.Contact}>
        <div className="container">
          <h2>CONTACT</h2>
          <p>
            Contact me using the below form or send an email at{" "}
            <a href="mailto:catalin.stan7@yahoo.com">catalin.stan7@yahoo.com</a>
          </p>
          <ContactForm validationHandler={validationHandler} />
          <p>*all the inputs are required</p>
        </div>
        {validationMessage && (
          <div className={styles.validation}>{validationMessage}</div>
        )}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#116466"
          fillOpacity="1"
          d="M0,128L24,149.3C48,171,96,213,144,229.3C192,245,240,235,288,213.3C336,192,384,160,432,154.7C480,149,528,171,576,186.7C624,203,672,213,720,208C768,203,816,181,864,170.7C912,160,960,160,1008,154.7C1056,149,1104,139,1152,138.7C1200,139,1248,149,1296,160C1344,171,1392,181,1416,186.7L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Contact;
