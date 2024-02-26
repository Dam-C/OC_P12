import content from "../datas/content.json";
import { ProjectItem } from "./_compsIndex";
import { observerIntersection } from "../utils/scrollAnim";
import { useRef, useEffect } from "react";

const ProjectsList = () => {
  const projects = content;

  const targetRef = useRef(null);
  useEffect(() => {
    return observerIntersection(targetRef);
  }, []);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="hidden site-section site-section__projects"
    >
      <h3 className="site-section__title projects-list__title">\ PROJETS</h3>
      <div className="folder">
        {content.map((project) => {
          return (
            <div key={project.id} className="project">
              <ProjectItem project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;
