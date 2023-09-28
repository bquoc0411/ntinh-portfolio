import React from "react";
import img from "../assets/ntlinh/carousel.jpg";
import lightLogo from "../assets/Logo/L2.png";
import style from "../scss/components/Carousel.module.scss"
import classNames from 'classnames';

const Carsouel = () => {
  return (
    <section className={classNames(style.carouselWrap)}>
      <div className="position-relative">
        <img src={img} alt="" style={{ width: "100%" }} />
        <img className={classNames(style.displayLogo)} src={lightLogo} alt="" />
      </div>
    </section>
  );
};

export default Carsouel;
