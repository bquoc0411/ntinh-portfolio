import React from "react";
import darkLogo from "../assets/Logo/L1.png";
import { NavLink } from "react-router-dom";
import style from "../scss/components/Navbar.module.scss";
import classNames from "classnames";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={darkLogo} alt="" className={style.logoWidth} />
        </a>
        <a className={style.navName} href="#">
          NGUYENTIENLINH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <NavLink
              className={classNames("nav-item", style.textDecoration)}
              to={"/"}
            >
              <span className={classNames("nav-link pe-2 pe-lg-5", style.pdNavlink)}>
                HOME
              </span>
            </NavLink>
            <NavLink
              className={classNames("nav-item", style.textDecoration)}
              to={"/my-work"}
            >
              <span className={classNames("nav-link pe-2 pe-lg-5", style.pdNavlink)}>
                MY WORK
              </span>
            </NavLink>
            <NavLink
              className={classNames("nav-item", style.textDecoration)}
              to={"/about"}
            >
              <span className={classNames("nav-link pe-2 pe-lg-5", style.pdNavlink)}>
                ABOUT ME
              </span>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
