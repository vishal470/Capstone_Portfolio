import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="services" id="education">
      <div className="max-width">
        <h2 className="title">
          <u>My Education</u>
        </h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-school"></i>
              <div className="text">Lovely Professional University</div>
              <p>Batch of 2024</p>
              <p>Currently pursuing a B.Tech degree in Computer Science.</p>
              
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-clock"></i>
              <div className="text">TATA DAV, Public School</div>
              <p>Batch of 2020</p>
              <p>
                Completed High School at DAV Public School, Jamadoba, Dhanbad in
                pure sciences with CS as additional.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">TATA DAV,Public School</div>
              <p>Batch of 2018</p>
              <p>
                Completed Matriculation at DAV Public School, Jamadoba, Dhanbad.
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
