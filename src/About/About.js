import React from "react";
import "./About.css";

export default function About() {

  return (
    <div className="mainAbout">
      <section className="about section" id="about">
        <h2 className="section-title">
          <u>About</u>
        </h2>
        <div className="about__container bd-grid">
          <div className="about__img">
            <img
              src="https://raw.githubusercontent.com/coder-vishal470/Images/main/Untitled%20design.png"
              alt=""
            />
          </div>

          <div>
            <h2 className="about__subtitle">I'am Vishal</h2>
            <p className="about__text">
              Hello, I’m a Vishal Sharma, Frontend Developer. I am a Student of
              Lovely Professional University. I have rich experience in web site
              design & building and customization. <br/>I am good at
            </p>
            <div className="skills">
            <button>C++</button>
            <button>JAVA</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>JQuery</button><br/>
            <button>Bootstrap</button>
            <button>SQL</button>
            <button>ReactJs</button>
            <button>WordPress</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
