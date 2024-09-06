import "./header.css";
export default function Header({ scrollHeight }) {
  return (
    <div
      className={
        scrollHeight < 60
          ? "header_Container bg_tranparent"
          : "header_Container bg_white"
      }
    >
      <box className="header1">header 1</box>
      <box className="header2">header 2</box>
    </div>
  );
}
