import { PropTypes } from "prop-types";
import { useState, useRef, useEffect } from "react";
import { observerIntersection } from "../utils/scrollAnim";

const Folder = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    return observerIntersection(targetRef);
  }, []);

  const [folderInit, folderChange] = useState(false);
  const parentRef = useRef();
  const fold = () => {
    folderChange(!folderInit);
  };
  return (
    <div>
      <p onClick={() => fold()}>TITLE</p>
      <div>
        {/* content goes under */}
        <div
          className="folder"
          ref={parentRef}
          style={
            folderInit
              ? {
                  height: parentRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          <p>CONTENT</p>
        </div>
      </div>
    </div>
  );
};

export default Folder;
