import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/HeroSection.js";
import AwardBanner from "./components/banners/awardBanner.js";
import Devices from "./components/devices/devices.js";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollHeight(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollHeight, "scrollPosition");
  return (
    <div className="mainContainer">
      <Header scrollHeight={scrollHeight} />
      <HeroSection />
      <AwardBanner/>
      <Devices/>
    </div>
  );
}

export default App;
