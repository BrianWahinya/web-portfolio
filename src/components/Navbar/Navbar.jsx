import Icon from "../Icon/Icon";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-content">
        <Icon id="logo" />
        <p>Brian Wahinya&trade;</p>
        <p>v4-{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
export default Navbar;
