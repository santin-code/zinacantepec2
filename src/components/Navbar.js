import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { useState } from "react";
// import Logo15 from '../logos/logo8.png'
// import Logo15 from '../logos/logo16.png'
// import Logo15 from '../logos/logo22.png'
// import Logo15 from '../logos/logo25.png'
// import Logo15 from '../logos/logo29.png'
// import Logo15 from '../logos/logo31.png'   IMPORTANTE
// import Logo15 from '../logos/logo34.png'
// import Logo15 from '../logos/logo35.png'   DAY OF LOVE
// import Logo15 from '../logos/logo36.png'
// import Logo15 from '../logos/logo38.png'    crhismast
// import Logo15 from "../logos/logo8.png";
// import Logo15 from "../logos/LOGO-WHITE/ARKAL-NIEVE(NAVIDAD).png";
import ArkalLogo from "../logos/LOGO-WHITE/ARKAL-FREEFIRE.png";

const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo__container">
          <img src={ArkalLogo} alt="logo" className="nav__logo" />
        </Link>
        <ul>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
