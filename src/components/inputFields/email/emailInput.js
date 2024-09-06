import { useState } from "react";
import "./emailInput.css";
import RedButton from "../../buttons/contrastBtn/redBtn";

function EmailInput() {
  const [email, setEmail] = useState("");

  return (
    <div className="container" >
      <div className="emailContainer">
        <input
          placeholder="Your Work Email"
          type="text"
          name="email"
          id="signup-email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ width: "70%", paddingLeft: "15px" }}>
        <RedButton content={"Get Started"} />
      </div>
    </div>
  );
}

export default EmailInput;
