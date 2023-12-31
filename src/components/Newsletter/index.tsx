import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => (
  <section className={styles.newsletter}>
    <div className={styles.newsletterInnerWrapper}>
      <header className={styles.newsletterHeading}>
        <h2>Join our Newsletter</h2>
        <span>Sign up for deals, new products and promotions</span>
      </header>
      <form className={styles.newsletterForm}>
        <div className={styles.inputWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.07667 6.53081C4.23291 6.01864 4.70918 5.64606 5.27246 5.64606H19.2725C19.8358 5.64606 20.312 6.01864 20.4683 6.53081L12.2725 11.9947L4.07667 6.53081ZM2.5225 6.88232C2.52236 6.89032 2.52235 6.89832 2.52246 6.90631V16.8961C2.52246 18.4148 3.75368 19.6461 5.27246 19.6461H19.2725C20.7912 19.6461 22.0225 18.4148 22.0225 16.8961V6.90629M20.5225 8.29744V16.8961C20.5225 17.5864 19.9628 18.1461 19.2725 18.1461H5.27246C4.58211 18.1461 4.02246 17.5864 4.02246 16.8961V8.29744L11.8564 13.5201C12.1084 13.688 12.4366 13.688 12.6885 13.5201L20.5225 8.29744ZM22.0224 6.88235C22.015 5.36987 20.7867 4.14606 19.2725 4.14606H5.27246C3.75826 4.14606 2.52989 5.36986 2.5225 6.88232"
              fill="#141718"
            />
          </svg>
          <input
            className={styles.newsletterTextInput}
            type="email"
            placeholder="Email address"
          />
        </div>
        <input
          className={styles.newsletterButton}
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  </section>
);

export default Newsletter;
