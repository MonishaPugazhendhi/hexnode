import PaddedSides from "../paddedComponent/paddedSides";
import "./features.css";
import image1 from "../../assets/device-owner.jpeg";
import image2 from "../../assets/profile-owner.jpeg";
import image3 from "../../assets/work-profile.jpeg";
import { useState } from "react";

export default function Features() {
  const featureContent = [
    {
      img: image1,
      title: "Device Owner",
      content:
        "Device Owner mode in Hexnode refers to an Android Enterprise enrollment configuration designed for Corporate Owned devices, allowing IT admins to exert firm control over the devices. It provides comprehensive device management capabilities, empowering admins to customize lock screens, manage networks, apply app restrictions, and configure kiosk settings.",
    },
    {
      img: image2,
      title: "Profile Owner",
      content:
        "Profile Owner mode in Android Enterprise facilitates device enrollment in personal devices with limited control for admins. Once enrolled, it establishes a separate work container within the device, ensuring a clear division between personal and corporate data for enhanced security and management.",
    },
    {
      img: image3,
      title: "Work Profile on Company-Owned devices (WP-C)",
      content:
        "Work Profile on Company-Owned (WP-C) mode leverages containerization, establishing distinct work and personal profiles to ensure privacy and security on corporate-owned devices while enabling personal usage. The employee's personal profile remains private within the containerized environment.",
    },
  ];
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState("");
  const handlechange = (index) => {
    if (index > active) {
      setAnimate("totop");
    } else {
      setAnimate("tobottom");
    }
    setActive(index);
  };
  return (
    <div className="features_container">
      <PaddedSides>
        <div className="heading">
          Explore diverse ownership setups for your Android fleet
        </div>
        <div className="features">
          <div key={active} className={`feature_img show2 ${animate}`}>
            <img
              className="feature_image"
              src={featureContent[active].img}
              alt=""
            />
          </div>
          <div className={"features_content"}>
            {featureContent.map((item, index) => (
              <div
                className={
                  index === active ? `bordered animated ${animate}` : "animated"
                }
                key={index}
              >
                {index === active ? (
                  <div key={active} className={`feature_img show  ${animate}`}>
                    <img
                      className="feature_image"
                      src={featureContent[active].img}
                      alt=""
                    />
                  </div>
                ) : null}
                <div
                  onClick={() => handlechange(index)}
                  className="feature_title"
                >
                  {item.title}
                  {active !== index && index + 1 !== featureContent.length  ? (
                    <hr />
                  ) : null}
                </div>
                {active === index ? (
                  <div className="general_text feature_text">
                    {item.content}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </PaddedSides>
    </div>
  );
}
