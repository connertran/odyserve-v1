import logo from "../pictures/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar-div">
      <img className="Navbar-logo" src={logo} alt="Logo" />
      <h1 className="Navbar-h1">Odyserve</h1>
    </div>
  );
}

export default Navbar;
