
import React, { useState } from "react";
import { Link } from "react-router-dom";


function NavTabs() {
  const [currentTabs, setCurrentTab] = useState('/Home');

  const styles = {
    color: {
      backgroundColor: 'white'
    }
  }
  console.log(window.location.pathname)
  return (
    <nav style={styles.color} className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
      <div style={styles.color}>
        <ul style={styles.color} className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              onClick={() => setCurrentTab('/Home')}
              className={
                currentTabs === "/" || currentTabs === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              onClick={() => setCurrentTab('/About')}
              className={currentTabs === "/About" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Projects"
              onClick={() => setCurrentTab('/Projects')}
              className={currentTabs === "/Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
