import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Lovely Professional University Private university in Phagwara,
                  Punjab
                </p>
              </div>
              <div class="col item social">
                <a href="https://www.facebook.com/profile.php?id=100047461201843" target="_blank">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/sharma_vs_vishal/" target="_blank">
                  <InstagramIcon />
                </a>
                <a href="https://github.com/vishal470">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/vishal-sharma-4606641b4/" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <p class="copyright">Company Name © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
