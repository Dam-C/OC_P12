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

        <div className="about-formation">
          <h4 className="about-formation__title">FORMATION</h4>
          <p className="about-formation__item">
            <span className="about-formation__item--year">2023</span> -
            Formation Intégrateur Web -
            <span className="about-formation__item--school">OpenClasrooms</span>
          </p>
          <p className="about-formation__item">
            <span className="about-formation__item--year">2013</span> - Bachelor
            Graphic Design -
            <span className="about-formation__item--school">
              CFA Com' Bagnolet
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
