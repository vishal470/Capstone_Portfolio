import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div classeName="main">
        <header className="header">
          <h1 className="logo">
            <a href="#home" className="vishal">
              <b>Vishal</b>
            </a>
          </h1>
          <ul className="main-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="bttn">
            <a href="https://drive.google.com/file/d/1Us8J9wjCXkUj3txBX-u_VTGBZB6Wda1l/view?usp=share_link" style={{ color: "white" }} target="_blank" download>
              Resume
            </a>
          </button>
        </header>
      </div>

    </div>
  );
}
