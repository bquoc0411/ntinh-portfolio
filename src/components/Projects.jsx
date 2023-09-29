import React, { useEffect } from "react";
import commercial from "../assets/projects/commercail.png";
import event from "../assets/projects/event.png";
import wedding from "../assets/projects/wedding.png";
import interview from "../assets/projects/interview.png";
import lifestyle from "../assets/projects/lifestyle.png"
import classNames from "classnames";
import style from "../scss/components/Project.module.scss";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section className="container">
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")}>
          <h1 className={classNames(style.title)}>
            <Link to={"/my-work/commercial"} className={style.textDeco}>
              {"Commercial\nProduct"}
            </Link>
          </h1>
        </div>
        <div className={classNames("col-lg-10 col-9", style.imgWrap)}>
          <Link to={"/my-work/commercial"}>
            <img src={commercial} className={classNames(style.imgFadeIn)} />
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")}>
          <h1 className={classNames(style.title)}>
            <Link to={"/my-work/wedding"} className={style.textDeco}>
              {"Wedding\nFilms"}
            </Link>
          </h1>
        </div>
        <div className={classNames("col-lg-10 col-9", style.imgWrap)}>
          <Link to={"/my-work/wedding"}>
            <img src={wedding} className={classNames(style.imgFadeIn)} />
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")}>
          <h1 className={classNames(style.title)}>
            <Link to={"/my-work/event"} className={style.textDeco}>
              {"Event"}
            </Link>
          </h1>
        </div>
        <div className={classNames("col-lg-10 col-9", style.imgWrap)}>
          <Link to={"/my-work/event"}>
            <img src={event} className={classNames(style.imgFadeIn)} />
          </Link>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")}>
          <h1 className={classNames(style.title)}>
            <Link to={"/my-work/interview-podcast"} className={style.textDeco}>
              {"Interview\nPodcast"}
            </Link>
          </h1>
        </div>
        <div className={classNames("col-lg-10 col-9", style.imgWrap)}>
          <Link to={"/my-work/interview-podcast"}>
            <img src={interview} className={classNames(style.imgFadeIn)} />
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className={classNames("col-lg-2 col-3")}>
          <h1 className={classNames(style.title)}>
            <Link to={"/my-work/lifestyle"} className={style.textDeco}>
              {"Lifestyle"}
            </Link>
          </h1>
        </div>
        <div className={classNames("col-lg-10 col-9", style.imgWrap)}>
          <Link to={"/my-work/lifestyle"}>
            <img src={lifestyle} className={classNames(style.imgFadeIn)} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
