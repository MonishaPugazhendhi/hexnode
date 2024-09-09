import { useState } from "react";
import "./dropdown.css";
import PaddedSides from "../paddedComponent/paddedSides";
export default function HeaderDropdown({
  title,
  classname,
  contentwidth,
  small,
  children,
}) {
  const [show, setShow] = useState(false);
  const [arrow, setarrow] = useState("");
  console.log(show, "show");
  return (
    <div className="h-dropdown">
      <div
        onMouseOver={() => {
          setShow(true);
          setarrow("down");
        }}
        onMouseLeave={() => {
          setShow(false);
          setarrow("up");
        }}
        className="h-title"
      >
        <span className={contentwidth ? "h-title-small" : "h-title-text"}>
          {title}
        </span>
        <span>
          <svg
            className={
              small
                ? `${arrow} ${classname} arrowStyle smallarrow`
                : `${arrow} ${classname} arrowStyle `
            }
            color="white"
            width="8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 8.1 4.9"
            xmlSpace="preserve"
          >
            <g>
              <polygon
                className="hex__arrow_st0"
                points="7.4,0.2 4,3.5 0.7,0 0,0.7 3.2,4.1 3.2,4.1 3.9,4.9 8.1,1"
              ></polygon>
            </g>
          </svg>
        </span>
      </div>
      {show ? (
        <div
          className={
            contentwidth
              ? " contentWidth h-popper animteDown"
              : "fullwidth h-popper animteDown"
          }
        >
          <PaddedSides>
            <div>{children}</div>
          </PaddedSides>
        </div>
      ) : null}
    </div>
  );
}
