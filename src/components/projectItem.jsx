import { PropTypes } from "prop-types";
import { useState, useRef } from "react";

const ProjectItem = (props) => {
  const { project } = props;
  const [collapseInit, collapseChange] = useState(false);
  const [wouldYou, setWouldYou] = useState(false);
  const parentRef = useRef();
  const handleHeaderClick = () => {
    collapseChange(!collapseInit), setWouldYou(!wouldYou);
  };

  return (
    <article className="project-item">
      <div className="project-header" onClick={() => handleHeaderClick()}>
        <div className="project-header__mini-top">
          <p className="project-header__mini-blut">\\ {project?.blut} -</p>
          <p className="project-header__mini-num">N° / {project?.id}</p>
        </div>
        <div className="project-header-title-wrap">
          <h3 className="project-header__title">{project?.title}</h3>

          <p className="project-header__would-you">
            would you like
            <br />
            to know {wouldYou ? "less" : "more"} ?
          </p>
        </div>
      </div>
      <div
        className="project-infos-wrapper"
        ref={parentRef}
        style={
          collapseInit
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className="project-infos">
          <div className="project-infos__text">
            <a
              className="project-infos__github-link"
              href={project?.gitHubLink}
              target="blank"
            >
              lien github
            </a>
            <p className="project-infos__desc">{project?.text}</p>
          </div>
          <div className="project-infos__screen">{project?.screen}</div>
          <div className="project-infos__technos">
            <h4 className="project-infos__technos-title">Made with :</h4>
            <div className="project-infos__technos-list">
              {project?.technos.map((tech) => {
                return (
                  <div key={tech.name} className="project-infos__techno">
                    <img
                      className="project-infos__techno-icon"
                      src={tech.technoIcon}
                      alt={tech.name}
                    />
                    {/* <p className="project-infos__techno-name">{tech.name}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
