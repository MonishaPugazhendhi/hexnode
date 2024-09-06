import PaddedSides from "../paddedComponent/paddedSides";
import "./banner.css";
import gartner from "../../assets/gartner-removebg-preview.png";
import forrester from '../../assets/forrester.png'
export default function AwardBanner() {
  return (
    <div className="bannerContainer">
      <PaddedSides>
        <div className="banner">
          <div className="box1">
            <div className="text1"> Loved by all. </div>
            <div className="text1">Recognized by the best. </div>
          </div>
          <div className="box2">
            <img 
              src={gartner}
              alt="gartner"
              className="gartner"
            />
            <div className="text2">
              Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
              Quadrant for Unified Endpoint Management tools 2022.
            </div>
          </div>
          <div className="box3">
            <img 
              src={forrester}
              alt="forrester"
              className="forrester"
            />
            <div className="text2">
            Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </div>
          </div>
        </div>
      </PaddedSides>
    </div>
  );
}
