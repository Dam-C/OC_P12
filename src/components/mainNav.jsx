const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__wrapper">
        <div className="main-nav__left">
          <h1>
            Damien <br />
            Charlois
          </h1>
          <h3>Développeur Front-End</h3>
        </div>
        <ul className="main-nav__right">
          <li>
            <a>A propos</a>
          </li>
          <li>
            <a>Projets</a>
          </li>
          <li>
            <a>Technos</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
