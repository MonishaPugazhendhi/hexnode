export default function Carousal() {
  const carousalContent = [
    {
      img: "",
      quotes: "Hexnode is of great value. Works great with Android and iOS!",
      author: "Justin Modrak",
      desigLine1: "Technology Coordinator",
      desigLine2: "East Troy Community School District",
    },
    {
      img: "",
      quotes:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      author: "Dalibor Kruljac",
      desigLine1: "KAMELEYA LTD",
    },
    {
      img: "",
      quotes: "It seemed to be in-line with everything we were looking at.",
      author: "Tom Morrison",
      desigLine1: "Executive Account Manager, NCS",
    },
  ];
  return (
    <div className="carousalContainer">
      {carousalContent.map((item, index) => (
        <span className="viewBox">
          <span key={index} className="carousalbox">
            <span className="cars-img">{"img"}</span>
            <span className="cars-content">{item.quotes}</span>
          </span>
        </span>
      ))}
    </div>
  );
}
