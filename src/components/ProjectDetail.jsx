import React from "react";
import style from "../scss/components/Project.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectDetail = (props) => {
  return (
    <>
      <Navbar />
      <section className="container">
        <h1 className={style.weddingTitle}>{props.heading}</h1>
        <div className="row">
          {props.data?.map((item) => {
            return (
              <div className="col-lg-6 mt-5" key={item.id}>
                <iframe
                  style={{ width: "100%", height: "300px" }}
                  src={item.link}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetail;
