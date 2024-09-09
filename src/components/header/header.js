import "./header.css";
import logo from "../../assets/logo.png";

import PaddedSides from "../paddedComponent/paddedSides";
import HeaderDropdown from "../dropDowns/headerDropdown";
import RedButton from "../buttons/contrastBtn/redBtn";
import {
  capabilitiesmenu,
  featuresmenu,
  Partnersmenu,
  supportsmenu,
} from "../../content/content";
import MenuIcon from "../../assets/menuIcon/menuIcon";

export default function Header({ scrollHeight }) {
  return (
    <div
      className={
        scrollHeight < 60
          ? "header_Container bg_tranparent"
          : "header_Container bg_white"
      }
    >
      <PaddedSides>
        <div className="header1">
          <div className="h1-line1">
            <span className="lineStyle boldstyle">What's new</span>
            <HeaderDropdown
              small={true}
              classname={scrollHeight > 60 ? "fillblack" : "h-arrow"}
              title={"Demo"}
              contentwidth={true}
            >
              <div className="h-title-small">Request a demo</div>
              <div className="h-title-small">Watch a demo</div>
            </HeaderDropdown>
            <span className="lineStyle">Contact Sales</span>
            <span className="lineStyle">+1-833-439-6633 </span>
          </div>
          <div className="h1-line2">
            <div className="menus">
              <img
                className={scrollHeight < 60 ? "logo color-Inverted" : "logo"}
                src={logo}
                alt="logo"
              />
              <HeaderDropdown
                classname={scrollHeight > 60 ? "fillblack" : "h-arrow"}
                title={"features"}
              >
                {featuresmenu()}
              </HeaderDropdown>
              <HeaderDropdown
                classname={scrollHeight > 60 ? "fillblack" : "h-arrow"}
                title={"Capabilities"}
              >
                {capabilitiesmenu()}
              </HeaderDropdown>
              <span className="h-title-text">pricing</span>
              <span className="h-title-text">customers</span>
              <HeaderDropdown
                classname={scrollHeight > 60 ? "fillblack" : "h-arrow"}
                title={"partners"}
              >
                {Partnersmenu()}
              </HeaderDropdown>
              <HeaderDropdown
                classname={scrollHeight > 60 ? "fillblack" : "h-arrow"}
                title={"support"}
              >
                {supportsmenu()}
              </HeaderDropdown>
            </div>
            <div className="trialbtn">
              <div>
                <RedButton small={true} content={"14 day free trial"} />
              </div>
            </div>
          </div>
        </div>
        <div className="header2">
          <img
            className={scrollHeight < 60 ? "logo2 color-Inverted" : "logo2"}
            src={logo}
            alt="logo"
          />
          <MenuIcon whiteclr={scrollHeight > 60 ? true : false} />
        </div>
      </PaddedSides>
    </div>
  );
}
