import { useState } from "react";

const Contact = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <section className="site-section">
      <h3 className="site-section__title">\ contact</h3>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-wrapper">
            <label htmlFor="sender-mail">Email</label>
            <input
              type="text"
              id="sender-mail"
              name="sender-mail"
              placeholder="email"
              value=""
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">Message</label>
            <input
              type="text"
              id="chg-userName-firstName"
              name="chg-userName-firstName"
              placeholder="message"
              onChange={handleChange}
            />
          </div>

          <button className="btn send-msg-btn" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
