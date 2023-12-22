import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <img
            src="assets/img/logo.png"
            alt="logo"
            style={{ width: "100px" }}
          />
        </div>
        <div className="navbar-right">
          <ul className="d-flex gap-4" style={{ listStyle: "none" }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/ideas">Ideas</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
