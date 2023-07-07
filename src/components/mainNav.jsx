const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__wrapper">
        <div className="main-nav__left">
          <h1>Damien Charlois</h1>
          <h3>Développeur Front-End</h3>
        </div>
        <ul className="main-nav__right">
          <li>
            <a href="#about">A propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
