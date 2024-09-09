import './menuIcon.css';
export default function MenuIcon({whiteclr}) {
  return (
    <label className="bar" for="check">
      <input type="checkbox" id="check" />

      <span className={whiteclr ? "top icon-white" : "top icon"}></span>
      <span className={whiteclr ? "middle icon-white" : "middle icon"}></span>
      <span className={whiteclr ? "bottom icon-white" : "bottom icon"}></span>
    </label>
  );
}
