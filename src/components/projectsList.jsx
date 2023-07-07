import content from "../datas/content.json";
import { ProjectItem } from "./_compsIndex";

const ProjectsList = () => {
  const projects = content;

  return (
    <section id="#projects" className="site-section site-section__projects">
      <h3 className="site-section__title projects-list__title">\ PROJETS</h3>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <ProjectItem project={project} />
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsList;
