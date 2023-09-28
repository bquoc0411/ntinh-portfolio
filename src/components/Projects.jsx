import React, { useEffect } from "react";
import commercial from "../assets/projects/commercail.png";
import event from "../assets/projects/event.png";
import wedding from "../assets/projects/wedding.png";
import interview from "../assets/projects/interview.png";
import classNames from "classnames";
import style from '../scss/components/Project.module.scss'

const Projects = () => {
  return (
    <section className="container">
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")} >
          <h1 className={classNames(style.title)}>Product</h1>
          <h1 className={classNames(style.title)}>Commercial</h1>
        </div>
        <div className="col-lg-10 col-9">
          <img src={commercial} className={classNames(style.imgFadeIn)} />
        </div>
      </div>
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")} >
          <h1 className={classNames(style.title)}>Wedding</h1>
          <h1 className={classNames(style.title)}>Film</h1>
        </div>
        <div className="col-lg-10 col-9">
          <img src={wedding} className={classNames(style.imgFadeIn)} />
        </div>
      </div>
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")} >
          <h1 className={classNames(style.title)}>Event</h1>
        </div>
        <div className="col-lg-10 col-9">
          <img src={event} className={classNames(style.imgFadeIn)} />
        </div>
      </div>
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")} >
          <h1 className={classNames(style.title)}>Interview Podcast</h1>
        </div>
        <div className="col-lg-10 col-9">
          <img src={interview} className={classNames(style.imgFadeIn)} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
