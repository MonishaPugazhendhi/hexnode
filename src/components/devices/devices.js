import devices from "../../assets/android-devices.webp";
import PaddedSides from "../paddedComponent/paddedSides";
import "./devices.css";
export default function Devices() {
  return (
    <PaddedSides>
      <div className="devices">
        <img className="dev_img" src={devices} alt="devices" />
        <div  className="heading">
          Phones, TVs and Wearables. All from a single point.
        </div>
        <div style={{width: '60%', textAlign: 'center', marginTop: '20px'}} className="general_text">
          The Unified Endpoint Management (UEM) software from Hexnode simplifies
          management of all sorts of Android endpoints, ranging from mobile
          phones to XR devices, and unlocks countless endpoint management
          capabilities.
        </div>
      </div>
    </PaddedSides>
  );
}
