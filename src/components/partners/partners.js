import PaddedSides from "../paddedComponent/paddedSides";
import "./partners.css";

export default function Partners() {
  return (
    <PaddedSides>
      <div className="partnerContainer">
        <div className="content">
          <div className="partner_title">Easy integration</div>
          <div className="partner_text">
            Hexnode provides support for an ever-growing list of integrations to
            help you leverage the features of your pre-existing resources.
          </div>
        </div>
        <div className="partners">
          <div className="row1">
            <img className="image samsung"
              alt="samsung knox"
              width="148"
              height="43"
              src="https://static.hexnode.com/v2/assets/img/integration-partners/samsung-knox.svg"
            />

            <img className="image kyocera"
              alt="kyocera"
              width="148"
              height="45"
              src="https://static.hexnode.com/v2/assets/img/integration-partners/kyocera.png"
            />
          </div>
          <div className="row2">
            <div className="row2_1">
              <img className="image lg"
                alt="lg gate"
                width="148"
                height="43"
                src="https://static.hexnode.com/v2/assets/img/integration-partners/lg-gate.png"
              />

              <img className="image google"
                alt="google workspace"
                width="149"
                height="43"
                src="https://static.hexnode.com/v2/assets/img/integration-partners/google-workspace.svg"
              />
            </div>
            <div className="row2_2">
              <img className="image hexnode"
                alt="hexnode"
                width="100"
                height="21"
                src="https://static.hexnode.com/v2/assets/img/integration-partners/logo.svg"
              />
            </div>
            <div className="row2_3">
              <img className="image zendesk"
                alt="zendesk"
                width="148"
                height="45"
                src="https://static.hexnode.com/v2/assets/img/integration-partners/zendesk.svg"
              />

              <img className="image microsoft"
                alt="Microsoft Entra ID"
                width="148"
                height="45"
                src="https://static.hexnode.com/v2/assets/img/integration-partners/microsoft-entra-id.svg"
              />
            </div>
          </div>
          <div className="row3">
            <img className="image ad"
              alt="active directory"
              width="148"
              height="44"
              src="https://static.hexnode.com/v2/assets/img/integration-partners/windows-active-directory.svg"
            />

            <img className="image android"
              alt="android"
              width="148"
              height="43"
              src="https://static.hexnode.com/v2/assets/img/integration-partners/android.svg"
            />
          </div>
        </div>
      </div>
    </PaddedSides>
  );
}
