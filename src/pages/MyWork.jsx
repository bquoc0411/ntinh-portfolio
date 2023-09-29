import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import style from "../scss/components/Project.module.scss"
const MyWork = () => {
  return (
    <>
      <Navbar />
      <div className={style.myWorktitle}>
        <h1 className="text-center">My Work</h1>
      </div>
      <Projects />
      <Footer />
    </>
  );
};

export default MyWork;
