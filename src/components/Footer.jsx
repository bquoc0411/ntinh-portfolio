import React from "react";
import logo from "../assets/Logo/L2.png";
import fb from "../assets/footer-icon-link/2021_Facebook_icon.svg.png";
import zalo from "../assets/footer-icon-link/Icon_of_Zalo.svg.webp";
import youtube from "../assets/footer-icon-link/youtube-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="d-flex flex-md-row flex-column justify-content-center align-items-center pb-3">
        <div className="px-3 pt-0 pt-sm-3 order-md-1 order-2 fs-3">
          Let's Connect!
        </div>
        <div className="px-3 pt-3 order-md-2 order-1">
          <img src={logo} alt="" style={{ width: "60px" }} />
        </div>
        <div className="px-3 pt-3 d-flex order-md-3 order-3">
          <div className="px-2">
            <a href="https://www.facebook.com/ltnguyen198">
              <img src={fb} alt="" style={{ width: "32px" }} loading="lazy" />
            </a>
          </div>
          <div className="px-2">
            <a href="https://www.youtube.com/channel/UCZVfd9rhMUgZT9V6nBsfabw">
              <img
                src={youtube}
                alt=""
                style={{ width: "32px" }}
                loading="lazy"
              />
            </a>
          </div>
          <div className="px-2">
            <a href="https://zalo.me/0858250855">
              <img src={zalo} alt="" style={{ width: "32px" }} loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
