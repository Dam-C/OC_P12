import { PropTypes } from "prop-types";
import { useState, useRef, useEffect } from "react";
import { observerIntersection } from "../utils/scrollAnim";

const ProjectItem = (props) => {
  const { project } = props;

  const targetRef = useRef(null);
  useEffect(() => {
    return observerIntersection(targetRef);
  }, []);

  const [collapseInit, collapseChange] = useState(false);
  const [wouldYou, setWouldYou] = useState(false);
  const parentRef = useRef();
  const handleHeaderClick = () => {
    collapseChange(!collapseInit), setWouldYou(!wouldYou);
  };

  return (
    <article ref={targetRef} className="hidden project-item">
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
          <div className="project-infos__screen">
            <img className="project-infos__screen-img" src={project?.screen} />
          </div>
          <div className="project-infos__text">
            <p className="project-infos__desc">{project?.text}</p>
            <div className="project-infos__technos">
              <div className="project-infos__links">
                <a
                  className="project-infos__link"
                  href={project?.gitHubLink}
                  target="blank"
                >
                  github
                </a>
                {project?.liveSite ? (
                  <a
                    className="project-infos__link"
                    href={project?.liveSite}
                    target="blank"
                  >
                    site
                  </a>
                ) : (
                  ""
                )}
              </div>
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
      </div>
    </article>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
