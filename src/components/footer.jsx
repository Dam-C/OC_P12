const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Damien Charlois</p>
      <div className="footer-socials">
        <a href="https://github.com/Dam-C">
          <img className="footer-socials__icon" src="./icons/icon-github.png" />
        </a>
        <a href="https://www.linkedin.com/in/damien-charlois-9b716883/">
          <img
            className="footer-socials__icon"
            src="./icons/icon-linkedin.png"
          />
        </a>
        <a href="mailto:damien.charlois@gmail.com">
          <img className="footer-socials__icon" src="./icons/icon-mail.png" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
