
import './sides.css'
export default function PaddedSides({ children }) {
  return <div className="paddedSides">
    <div style={{width:'100%'}}>{children}</div>
  </div>;
}
