import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div class="nav-bar center-nav">
        <span class="nav-logo">
          <li>Ecom</li>
        </span>
        <div class="nav-pages">
          <li>Products</li>
          <li>Cart</li>
          <li class="nav-active">Contact</li>
        </div>
      </div>
    </div>
  );
}

export default Header;
