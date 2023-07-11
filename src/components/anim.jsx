import { observerIntersection } from "../utils/scrollAnim";
import { useRef, useEffect } from "react";

const Anim = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    return observerIntersection(targetRef);
  }, []);

  return (
    <section className="anim-wrapper">
      <p ref={targetRef} className="hidden anim__top">
        HELLOW
      </p>
    </section>
  );
};

export default Anim;
