import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header role="navigation">
        <nav aria-label="navbar" role="navigation">
          <div class="parent-container">
            <div class="navbar-container" id="navbar">
              <div class="logo" alt="logo">
                Net Solutions
              </div>
              <div class="links" tabindex="-1">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/Screenshot">Screenshot</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
