import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    sender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { sender, message } = formData;
    const mailtoUrl = `mailto:damien.charlois@gmail.com?subject=Message from ${sender}&body=${message}`;
    window.location.href = mailtoUrl;

    setFormData({
      email: "",
      sender: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="site-section">
      <h3 className="site-section__title">\ CONTACT</h3>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="sender" className="contact-form__label">
            _- Nom -_
          </label>
          <input
            className="contact-form__input contact-form__input-sender"
            type="text"
            id="sender"
            name="sender"
            placeholder=""
            value={formData.sender}
            onChange={handleChange}
            required
          />
          <label htmlFor="message" className="contact-form__label">
            _- Message -_
          </label>
          <textarea
            className="contact-form__input contact-form__input-text"
            type="text"
            id="message"
            name="message"
            placeholder=""
            onChange={handleChange}
          ></textarea>
          <button className="contact-form__btn" type="submit">
            / Envoyer /
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
