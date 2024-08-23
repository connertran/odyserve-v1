import logo from "../pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer-div">
      <img className="Footer-logo" src={logo} alt="Logo" />
      <div className="Footer-icon-div">
        <a href="https://www.instagram.com/odyserve_official/">
          <FontAwesomeIcon className="Footer-icon" icon={faInstagram} />
        </a>
        <a href="https://x.com/odyserve">
          <FontAwesomeIcon className="Footer-icon" icon={faXTwitter} />
        </a>
        <a href="mailto:odyserve@gmail.com">
          <FontAwesomeIcon className="Footer-icon" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
