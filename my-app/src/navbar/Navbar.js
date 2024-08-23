import logo from "../pictures/logo.png";
import logoLetter from "../pictures/logo-letter.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar-div">
      <img className="Navbar-logo" src={logo} alt="Logo" />
      <img className="Navbar-logo-letter" src={logoLetter} alt="Odyserve" />
    </div>
  );
}

export default Navbar;
