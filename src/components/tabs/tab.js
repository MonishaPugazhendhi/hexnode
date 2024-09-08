import React, { useState, useRef, useEffect } from "react";
import "./tabs.css";
import PaddedSides from "../paddedComponent/paddedSides";
import tab1Img from "../../assets/android-enterprise.jpeg";
import tab2Img from "../../assets/samsung-knox-kme.jpeg";
import tab3Img from "../../assets/zero-touch-onboarding.jpeg";
import tab4Img from "../../assets/completely-remote.jpeg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [slideSide, setSlideSide] = useState("");
  const [closeSide, setCloseSide] = useState("");
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
    setActiveAccordion(index);
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      // setActiveAccordion(null);
      setCloseSide("totop");
      setTimeout(() => setActiveAccordion(null), 300);
    } else {
      setActiveAccordion(index);
      setCloseSide("tobottom");
    }
    handleTabClick(index);
  };
  const [isScreen900px, setIsScreen900px] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const handleMediaQueryChange = (event) => {
      setIsScreen900px(event.matches);
    };

    setIsScreen900px(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement && tabsContainerRef.current) {
      const indicator = document.querySelector(".active-indicator");
      indicator.style.width = `${activeTabElement.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;

      tabsContainerRef.current.scrollLeft =
        activeTabElement.offsetLeft -
        tabsContainerRef.current.offsetWidth / 2 +
        activeTabElement.offsetWidth / 2;
    }
  }, [activeTab, activeAccordion, isScreen900px]);

  const tabContent = [
    {
      heading: "Android Enterprise",
      title: "Simplify enterprise management",
      img: tab1Img,
      p1: "Android Enterprise (AE) along with Hexnode enables the enterprise to exercise an extended level of control over every manageable aspect of a device.",
      p2: "Support containerization, which creates a virtual container effectively separating work-related data from everything else. Apart from securing and enhancing control over corporate data, containerization helps incorporate a sense of user privacy.",
      p3: "Android Enterprise provisions for a managed Google Play Store. Housed within the managed Google Play store are applications that are pre-approved by the enterprise.",
    },
    {
      heading: "Samsung Knox",
      title: "Build your own metaphoric fort",
      img: tab2Img,
      p1: "The Knox platform is built into most Samsung phones, tablets and wearables. Hexnode along with Samsung Knox extends the granular management capabilities of the enterprise by ensuring that the device is protected throughout its lifecycle.",
      p2: "Samsung with Knox allows its users to enroll with Hexnode UEM through Knox Mobile Enrollment (KME). KME lets the enterprise enroll, configure and manage devices on the very first power on.",
      p3: "Hexnode and Knox help the enterprise unlock some device management features that are beyond the capabilities of generic devices.",
    },
    {
      heading: "No-touch onboarding",
      title: "Get started with no hiccups",
      img: tab3Img,
      p1: "Android Zero Touch Enrollment provisions for simplified large-scale enterprise device deployment.",
      p2: "Samsung Knox Enrollment is one among the most convenient options for the enterprise to enroll devices in bulk. Integration with Hexnode ensures deployment and configuration of Samsung devices that are completely secure from the hardware up.",
      p3: "Hexnode helps your organization remain as flexible as possible with a plethora of enrollment options ranging from no-touch to QR code enrollments to ensure that the users can get to work with zero time delay.",
    },
    {
      heading: "Completely remote",
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
              {tabContent.map((tab, index) => (
                <div
                  key={index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => {
                    handleTabClick(index);
                  }}
                >
                  {tab.heading}
                </div>
              ))}

              <div className="active-indicator"></div>
            </div>
          </div>
        </div>
        <div className="tab-content-wrapper">
          <div
            key={`${activeTab}-${slideSide - activeAccordion}`}
            className={`tab-content ${slideSide}`}
          >
            <div className="tab-column1">
              <div className="tab-title">{tabContent[activeTab]?.title}</div>
              <div className="tab-p">{tabContent[activeTab]?.p1}</div>
              <div className="tab-p">{tabContent[activeTab]?.p2}</div>
              <div className="tab-p">{tabContent[activeTab]?.p3}</div>
            </div>
            <div className="tab-column2">
              <img
                className="tab-img"
                alt=""
                src={tabContent[activeTab]?.img}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-container">
        <div
          key={`${activeTab}-${slideSide - activeAccordion}`}
          className="accordion"
        >
          {tabContent.map((accordion, index) => (
            <>
              <div
                onClick={() => {
                  handleAccordionClick(index);
                  console.log(index === activeAccordion, "sdiuhiuh");
                }}
                key={index}
                className={index === activeAccordion ? "activetab accordion-item" : "accordion-item"}
              >
                <div>{accordion.heading}</div>
                <div
                  className={
                    activeAccordion === index
                      ? "active accordion-icon"
                      : "accordion-icon"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 15 20"
                  >
                    <g>
                      <path
                        d="M13.893,7.015a.78.78,0,0,1-.5-.18L7.352,1.784,1.305,6.657a.776.776,0,0,1-.49.174.786.786,0,0,1-.525-.286L.2,6.529A.778.778,0,0,1,.306,5.393L6.847.128A.775.775,0,0,1,7.275,0l.052,0h.024a.778.778,0,0,1,.5.178l6.545,5.455a.78.78,0,0,1-.5,1.379Z"
                        fill= {index === activeAccordion ? "#fff" : "#000"}
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {index === activeAccordion ? (
                <div
                  key={`${activeTab}-${
                    slideSide - activeAccordion + closeSide
                  }`}
                  className={`accordion-content ${closeSide}`}
                >
                   <div className="tab-column2">
              <img
                className="tab-img"
                alt=""
                src={tabContent[activeTab]?.img}
              />
            </div>
                 <div className="tab-column1">
              <div className="tab-title">{tabContent[activeTab]?.title}</div>
              <div className="tab-p">{tabContent[activeTab]?.p1}</div>
              <div className="tab-p">{tabContent[activeTab]?.p2}</div>
              <div className="tab-p">{tabContent[activeTab]?.p3}</div>
            </div>
           
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </PaddedSides>
  );
};

export default Tabs;
