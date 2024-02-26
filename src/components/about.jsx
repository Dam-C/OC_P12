import { observerIntersection } from "../utils/scrollAnim";
import { useRef, useEffect } from "react";
import stack from "../datas/stack.json";

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
            <span className="about-formation__item--year">2023-2024</span> -
            Harvard CS50x -
            <span className="about-formation__item--school">edX</span>
          </p>
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
            {stack.map((tech, i) => {
              return (
                <li id={tech.techName} key={`${tech.techName}i`}>
                  <img
                    src={tech.src}
                    className="about-stack__icon"
                    alt={tech.techName}
                  />
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
