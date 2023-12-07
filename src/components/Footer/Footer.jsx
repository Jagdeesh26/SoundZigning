import React from "react";
import "./Footer.css";
import { facebookLogo, instagramLogo, twitterLogo } from "../../assets";

function Footer() {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo1">
              Sound<span className="red">DZign</span>
            </a>
            <div className="social-icon">
              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>
            </div>
            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2022
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@gmail.com</a>
              </li>
              <li>
                <a href="">+91 99999 99999</a>
              </li>
            </ul>
          </div>
          <div className="copyright-mobile">
              This website is designed by GTCoding Ⓒ 2022
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
