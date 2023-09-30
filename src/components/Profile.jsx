import React from "react";
import fb from "../assets/footer-icon-link/2021_Facebook_icon.svg.png";
import zalo from "../assets/footer-icon-link/Icon_of_Zalo.svg.webp";
import youtube from "../assets/footer-icon-link/youtube-logo.webp";
import style from "../scss/About.module.scss";
import classNames from "classnames";
import aboutImg from "../assets/ntlinh/about.jpg";
import ModalZalo from "./ModalZalo";

const Profile = () => {
  return (
    <section className={classNames("container", style.wrapper)}>
      <h1 className={style.heading}>About</h1>
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center mb-3">
          <img src={aboutImg} alt="" className={style.profileImg} />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div>
            <p className={style.aboutText}>Hi, I'm Linh.</p>
            <p className={style.aboutText}>
              I'm a videographer based in Hanoi.
            </p>
          </div>
          <div className="d-flex flex-lg-row flex-column mx-auto mx-lg-0 mt-5">
            <h4 className={style.cta}>Connect with me</h4>
            <div className="ps-3 d-flex justify-content-center align-items-center">
              <div className="px-2">
                <a href="https://www.facebook.com/ltnguyen198">
                  <img src={fb} alt="" style={{ width: "32px" }} />
                </a>
              </div>
              <div className="px-2">
                <a href="https://www.youtube.com/channel/UCZVfd9rhMUgZT9V6nBsfabw">
                  <img src={youtube} alt="" style={{ width: "32px" }} />
                </a>
              </div>
              <div
                className="px-2"
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span>
                  <img src={zalo} alt="" style={{ width: "32px" }} />
                </span>
              </div>
              <ModalZalo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
