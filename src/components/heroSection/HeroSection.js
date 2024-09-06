
import EmailInput from "../inputFields/email/emailInput";
import PaddedSides from "../paddedComponent/paddedSides";
import android from "../../assets/android-silver-badge.svg";
import "./heroSection.css";
import MobileSpinner from "../mobileSpinner/mobileSpinner";
import mobile from "../../assets/android-work-app.webp";
export default function HeroSection() {
  return (
    <div className="heroSection">
      <PaddedSides>
        <div className="heroSection_Container">
          <div className="tagline">
            <div className="line1">
              Seamless Android device management at your fingertips.
            </div>
            <div className="line2">
              <EmailInput />
            </div>
            <div className="line3">
              <img alt="android" src={android} className="android" />
            </div>
          </div>
          <div className="spinner_Animation ">
            <div className="mobile_container">
              <img className="mobile" src={mobile} alt="mobile" />
            </div>
            <MobileSpinner />
          </div>
        </div>
      </PaddedSides>
    </div>
  );
}
