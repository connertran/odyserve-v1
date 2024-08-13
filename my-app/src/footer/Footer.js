import logo from "../pictures/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer-div">
      <img src={logo} alt="Logo" />
      <a href="https://www.instagram.com/odyserve_official/">
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#B197FC" }} />
      </a>
      <a href="https://x.com/odyserve">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="mailto:odyserve@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Footer;
