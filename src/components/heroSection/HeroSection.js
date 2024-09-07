
import EmailInput from "../inputFields/email/emailInput";
import PaddedSides from "../paddedComponent/paddedSides";
import android from "../../assets/android-silver-badge.svg";
import "./heroSection.css";
import MobileSpinner from "../mobileSpinner/mobileSpinner";
import mobile from "../../assets/android-work-app.webp";
export default function HeroSection() {
  return (
    <div  className="heroSection">
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
          <div  className="spinner_Animation ">
            <div className="mobile_container">
              <img className="mobile" src={mobile} alt="mobile" />
              <div className="mobile_text abs1">A one-size-fits-all UEM for BYOD, COPE and CYOD.</div>
              <div className="mobile_text abs2">Remotely manage all endpoints effortlessly from one console.</div>
              <div className="mobile_text abs3">Broad-ranging app and content management features.</div>
            </div>
            <MobileSpinner />
          </div>
        </div>
      </PaddedSides>
    </div>
  );
}
