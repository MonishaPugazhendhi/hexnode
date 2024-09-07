import React, { useState, useRef, useEffect } from "react";
import "./tabs.css"; // CSS file
import PaddedSides from "../paddedComponent/paddedSides";
import tab1Img from "../../assets/android-enterprise.jpeg";
import tab2Img from "../../assets/samsung-knox-kme.jpeg";
import tab3Img from "../../assets/zero-touch-onboarding.jpeg";
import tab4Img from "../../assets/completely-remote.jpeg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [slideSide, setSlideSide] = useState("");
  const tabRefs = useRef([]);
  const tabsContainerRef = useRef(null);

  const handleTabClick = (index) => {
    console.log(activeTab, index, "calccc");
    if (index > activeTab) {
      setSlideSide("toright");
    } else {
      setSlideSide("toleft");
    }
    setActiveTab(index);
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  // Ensure the active indicator moves to the correct tab
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement && tabsContainerRef.current) {
      // Scroll the active tab into view
      const indicator = document.querySelector(".active-indicator");
      indicator.style.width = `${activeTabElement.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;

      // Scroll horizontally to keep the active tab centered
      tabsContainerRef.current.scrollLeft =
        activeTabElement.offsetLeft -
        tabsContainerRef.current.offsetWidth / 2 +
        activeTabElement.offsetWidth / 2;
    }
  }, [activeTab]);

  const tabContent = [
    {
      title: "Simplify enterprise management",
      img: tab1Img,
      p1: "Android Enterprise (AE) along with Hexnode enables the enterprise to exercise an extended level of control over every manageable aspect of a device.",
      p2: "Support containerization, which creates a virtual container effectively separating work-related data from everything else. Apart from securing and enhancing control over corporate data, containerization helps incorporate a sense of user privacy.",
      p3: "Android Enterprise provisions for a managed Google Play Store. Housed within the managed Google Play store are applications that are pre-approved by the enterprise.",
    },
    {
      title: "Build your own metaphoric fort",
      img: tab2Img,
      p1: "The Knox platform is built into most Samsung phones, tablets and wearables. Hexnode along with Samsung Knox extends the granular management capabilities of the enterprise by ensuring that the device is protected throughout its lifecycle.",
      p2: "Samsung with Knox allows its users to enroll with Hexnode UEM through Knox Mobile Enrollment (KME). KME lets the enterprise enroll, configure and manage devices on the very first power on.",
      p3: "Hexnode and Knox help the enterprise unlock some device management features that are beyond the capabilities of generic devices.",
    },
    {
      title: "Get started with no hiccups",
      img: tab3Img,
      p1: "Android Zero Touch Enrollment provisions for simplified large-scale enterprise device deployment.",
      p2: "Samsung Knox Enrollment is one among the most convenient options for the enterprise to enroll devices in bulk. Integration with Hexnode ensures deployment and configuration of Samsung devices that are completely secure from the hardware up.",
      p3: "Hexnode helps your organization remain as flexible as possible with a plethora of enrollment options ranging from no-touch to QR code enrollments to ensure that the users can get to work with zero time delay.",
    },
    {
      title: "Manage devices handsfree",
      img: tab4Img,
      p1: "Support a wide range of management capabilities that can be configured on-to target devices without having to ever touch the device. Pre-configure device with corporate Wi-Fi, VPN and applications from the very first boot.",
      p2: "With Hexnode’s remote view and remote control capabilities, the admin can remotely view and troubleshoot supported devices.",
      p3: "Hexnode supports a completely cloud-based management console that can be accessed from any internet-enabled device, making remote management of the device simpler.",
    },
  ];
  return (
    <PaddedSides>
      <div className="tab-container">
        <div className="tabs-wrapper">
          <div ref={tabsContainerRef} className="tabs-container">
            <div className="tabs">
              {[
                "Android Enterprise",
                "Samsung Knox",
                "No-touch onboarding",
                "Completely remote",
              ].map((tab, index) => (
                <div
                  key={index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => {
                    handleTabClick(index);
                  }}
                >
                  {tab}
                </div>
              ))}

              <div className="active-indicator"></div>
            </div>
          </div>
        </div>
        <div className="tab-content-wrapper">
          <div
            key={`${activeTab}-${slideSide}`}
            className={`tab-content ${slideSide}`}
          >
            <div className="tab-column1">
              <div className="tab-title">{tabContent[activeTab]?.title}</div>
              <div className="tab-p">{tabContent[activeTab]?.p1}</div>
              <div className="tab-p">{tabContent[activeTab]?.p2}</div>
              <div className="tab-p">{tabContent[activeTab]?.p3}</div>
            </div>
            <div className="tab-column2">
              <img className="tab-img" alt="" src={tabContent[activeTab]?.img}/>
            </div>
            {/* {tabContent[activeTab]?.title} */}
          </div>
        </div>
      </div>
    </PaddedSides>
  );
};

export default Tabs;
