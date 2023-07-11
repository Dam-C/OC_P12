import { observerIntersection } from "../utils/scrollAnim";
import { useRef, useEffect } from "react";

const Anim = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  useEffect(() => {
    observerIntersection(targetRef1);
    observerIntersection(targetRef2);
  }, []);

  return (
    <section className="anim-wrapper">
      <h2 ref={targetRef1} className="hidden anim__top">
        Bonjour
      </h2>
      <p ref={targetRef2} className="hidden anim__sub">
        Moi c'est Damien, développeur front-end junior
      </p>
    </section>
  );
};

export default Anim;
