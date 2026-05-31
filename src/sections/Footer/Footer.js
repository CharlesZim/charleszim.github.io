import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <ScrollLink to="home" offset={-90} className="footerLogo">
            Charles Zimmerlin
          </ScrollLink>
          <p className="footerTag">iOS Software Engineer &amp; founder · Colmar, France</p>
        </div>
        <div className="footerMeta">
          <span>© {new Date().getFullYear()} Charles Zimmerlin</span>
          <Link to="/confidentiality" className="footerPrivacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
