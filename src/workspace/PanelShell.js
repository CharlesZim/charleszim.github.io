import { HiArrowLeft } from "react-icons/hi";

const PanelShell = ({ tag, title, kicker, onBack, children }) => {
  return (
    <div className="panel">
      <div className="panelHeader">
        <button
          className="backBtn"
          onClick={onBack}
          data-cursor="hover"
          data-cursor-label="Back"
        >
          <HiArrowLeft />
        </button>
        <div className="panelHeadText">
          <span className="panelTag">{tag} — {kicker}</span>
          <h2 className="panelTitle">{title}</h2>
        </div>
      </div>
      <div className="panelBody">{children}</div>
    </div>
  );
};

export default PanelShell;
