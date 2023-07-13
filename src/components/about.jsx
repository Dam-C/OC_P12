import { observerIntersection } from "../utils/scrollAnim";
import { useRef, useEffect } from "react";

const About = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    return observerIntersection(targetRef);
  }, []);

  return (
    <section ref={targetRef} className="hidden site-section ">
      <h2 id="about" className="site-section__title about-title">
        \ A PROPOS
      </h2>
      <div className="about-content-wrapper">
        <p className="about-text">
          Passionné par la création et les nouvelles technologies, j'ai sauté le
          pas pour devenir dévelopeur.
          <br />
          J'ai hâte d'en découvrir davantage sur les coulisses du monde de la
          programmation grace à la création de projets digitaux.
        </p>

        <article className="about-formation">
          <h4 className="about-formation__title">FORMATION</h4>
          <p className="about-formation__item">
            <span className="about-formation__item--year">2023</span> -
            Formation Intégrateur Web -
            <span className="about-formation__item--school">OpenClasrooms</span>
          </p>
          <p className="about-formation__item">
            <span className="about-formation__item--year">2023</span> -
            Certification JavaScript Algorithms and Data Structures -
            <span className="about-formation__item--school">FreeCodeCamp</span>
          </p>
          <p className="about-formation__item">
            <span className="about-formation__item--year">2013</span> - Bachelor
            Graphic Design -
            <span className="about-formation__item--school">
              CFA Com' Bagnolet
            </span>
          </p>
        </article>
        <article className="about-stack">
          <h4 className="about-stack__title">STACK</h4>
          <ul className="about-stack__list">
            <li>
              <img
                src="./icons/icon-html.png"
                className="about-stack__icon"
                alt="html icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-css.png"
                className="about-stack__icon"
                alt="CSS icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-js.png"
                className="about-stack__icon"
                alt="javascript"
              />
            </li>
            <li>
              <img
                src="./icons/icon-react.png"
                className="about-stack__icon"
                alt="react icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-reactrouter.png"
                className="about-stack__icon"
                alt="react-router icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-redux.png"
                className="about-stack__icon"
                alt="redux icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-sass.png"
                className="about-stack__icon"
                alt="sass icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-vite.png"
                className="about-stack__icon"
                alt="vite icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-notion.png"
                className="about-stack__icon"
                alt="notion icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-git.png"
                className="about-stack__icon"
                alt="git icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-github.png"
                className="about-stack__icon"
                alt="github icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-notion.png"
                className="about-stack__icon"
                alt="notion icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-ps.png"
                className="about-stack__icon"
                alt="photoshop icon"
              />
            </li>
            <li>
              <img
                src="./icons/icon-illustrator.png"
                className="about-stack__icon"
                alt="illustrator icon"
              />
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
