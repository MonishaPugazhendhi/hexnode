import EmailInput from "../inputFields/email/emailInput";


export default function EmailBanner({ title }) {
  return (
    <div className="emailBox">
      <div className="title">{title}</div>
      <div className="input">
        <EmailInput />
      </div>
      <p className="request-demo-text">
        No credit cards required.
        <div className="request-demo-link">Request a demo</div>
      </p>
    </div>
  );
}
