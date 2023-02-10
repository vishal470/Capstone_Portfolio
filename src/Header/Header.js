import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="mainHead">
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color"><b>Vishal Sharma</b></span>
            <br />
            Web Developer
          </h1>

          <a href="#contact" className="button">
            <b>Contact</b>
          </a>
        </div>

        <div className="home__img">
          <img
            src="https://raw.githubusercontent.com/coder-vishal470/Images/main/Untitled%20design.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
