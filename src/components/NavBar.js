import React from "react";
import '../App.css'

// navigation bar's layout
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-info">
        <a class="navbar-brand" href="#">KDCoding</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;