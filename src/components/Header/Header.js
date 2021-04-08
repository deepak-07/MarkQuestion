import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div class="nav-bar center-nav">
        <Link to="">
          <span class="nav-logo">
            <li>MarkQuestion</li>
          </span>
        </Link>
        <div class="nav-pages">
          <Link to="/Product">
            <li>Products</li>
          </Link>
          <Link to="/Cart">
            <li>Cart</li>
          </Link>
          <li class="nav-active">Contact</li>
        </div>
      </div>
    </div>
  );
}

export default Header;
