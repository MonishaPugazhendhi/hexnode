import { spinner1, spinner2, spinner3 } from "../../assets/spinner";
import "./mobileSpinner.css";

export default function MobileSpinner() {
  return (
    <div className="mobileSpinner">
    
      <span className="circle-svg-container first">
        <div className="circle-svg">{spinner1}</div>
      </span>
      <span className="circle-svg-container second">
        <div className="circle-svg rotated">{spinner2}</div>
      </span>
      <span className="circle-svg-container third">
        <div className="circle-svg">{spinner3}</div>
      </span>
    </div>
  );
}
