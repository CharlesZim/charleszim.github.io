import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLeft">
        <p>© {new Date().getFullYear()} Charles ZIMMERLIN</p>
      </div>
      <div className="footerRight">
        <Link href="#" to="/confidentiality">
          Privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
