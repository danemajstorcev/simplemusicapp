import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Link to="/" className="navbar">
      <h1>MUSIC DB</h1>
      <img src="/images/raw/Girls-Listen-Music_0.jpg" alt="banner" />
    </Link>
  );
};

export default Navbar;
