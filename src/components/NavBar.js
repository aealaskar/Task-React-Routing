import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <img
            className="cookieimg"
            src="https://www.clipartmax.com/png/middle/120-1208769_cookie-clipart-logo-png-cookies-logo-design-png.png"
          />
        </Link>
        <Link to="/products"> Products</Link>
      </header>
    </div>
  );
}
