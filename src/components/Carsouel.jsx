import React from "react";
import img from "../assets/ntlinh/home-bg.png";
import style from "../scss/components/Carousel.module.scss"
import classNames from 'classnames';

const Carsouel = () => {
  return (
    <section className={classNames(style.carouselWrap)}>
        <img src={img} alt="" style={{ width: "100%" }} loading="lazy"/>
    </section>
  );
};

export default Carsouel;
