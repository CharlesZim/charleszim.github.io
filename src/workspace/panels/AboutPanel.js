import PanelShell from "../PanelShell";
import charles from "../../assets/images/charlesP.webp";
import { hobbies } from "../../assets/Data";

const certs = ["Google UX Design", "IBM DevOps & Software Engineer"];

const AboutPanel = ({ onBack, onGoto, setPhoto }) => {
  return (
    <PanelShell tag="01" kicker="About" title="Who you'll work with" onBack={onBack}>
      <div className="aboutPanel">
        <div className="aboutPanelMedia">
          <button
            className="aboutPhotoFrame"
            onClick={() => setPhoto(charles)}
            data-cursor="hover"
            data-cursor-label="Zoom"
          >
            <img src={charles} alt="Charles Zimmerlin" className="aboutPhoto" />
          </button>
        </div>
        <div className="aboutPanelText">
          <p>
            I'm an <span className="bold">iOS Software Engineer</span> and founder based
            in Colmar, France, working end-to-end across{" "}
            <span className="bold">frontend</span> and <span className="bold">backend</span>{" "}
            — mostly with Swift, Core Data, React, React Native, Node.js and Python. I turn
            ideas into polished products that ship and scale.
          </p>
          <div className="chipRow">
            {certs.map((c) => (
              <span className="staticChip" key={c}>
                {c}
              </span>
            ))}
          </div>
          <div className="chipRow">
            {hobbies.map((h) => (
              <span className="hobby" key={h.name}>
                <span className="hobbyIcon">{h.icon}</span>
                {h.name}
              </span>
            ))}
          </div>
          <button
            className="panelCta"
            onClick={() => onGoto("contact")}
            data-cursor="link"
            data-cursor-label="Let's talk"
          >
            Work with me
          </button>
        </div>
      </div>
    </PanelShell>
  );
};

export default AboutPanel;
