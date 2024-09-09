import { useState } from "react";
import "./emailInput.css";
import RedButton from "../../buttons/contrastBtn/redBtn";

function EmailInput() {
  const [email, setEmail] = useState("");

  return (
    <div className="emailcontainer">
      <input
        placeholder="Your Work Email"
        type="text"
        name="email"
        id="signup-email"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    
        <RedButton content={"Get Started"} />
     
    </div>
  );
}

export default EmailInput;
