import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  //dropdown-display
  function themeDown() {
    let currentValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--display-dropdown");
    currentValue = currentValue !== "block" ? "block" : "none";
    document.documentElement.style.setProperty(
      "--display-dropdown",
      currentValue
    );
  }

  //dropdown-position
  const switchRef = useRef();
  const dropdownRef = useRef();
  useEffect(() => {
    function handleResize() {
      let rect = switchRef.current.getBoundingClientRect();
      dropdownRef.current.style.setProperty("left", rect.left - 26 + "px");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  function lightTheme() {
    props.changeTheme("light");
  }
  function darkTheme() {
    props.changeTheme("dark");
  }
  return (
    <>
      <header>
        <h1 id="title">Moohyun Kang</h1>
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="./">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="./about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="./contact">Contact</Link>
          </li>
          <div
            className="navbar-item"
            id="theme-switch"
            onClick={themeDown}
            ref={switchRef}
          ></div>
        </ul>
        <ul className="dropdown" ref={dropdownRef}>
          <li className="dropdown-item" id="theme-light" onClick={lightTheme}>
            light
          </li>
          <li className="dropdown-item" id="theme-dark" onClick={darkTheme}>
            dark
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
