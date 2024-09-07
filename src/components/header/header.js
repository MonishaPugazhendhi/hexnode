import "./header.css";
import logo from "../../assets/logo.png";

import PaddedSides from "../paddedComponent/paddedSides";
export default function Header({ scrollHeight }) {
  return (
    <div style={{':hover':{background:'white'}}}
      className={
        scrollHeight < 60
          ? "header_Container bg_tranparent"
          : "header_Container bg_white"
          
      }
    >
      <PaddedSides>
        <box className="header1">
          <img
            className={scrollHeight < 60 ? "logo color-Inverted" : "logo"}
            src={logo}
            alt="logo"
          />
        </box>
        <box className="header2">header 2</box>
      </PaddedSides>
    </div>
  );
}
