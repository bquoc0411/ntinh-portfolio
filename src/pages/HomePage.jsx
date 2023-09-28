import React from "react";
import Footer from "../components/Footer";
import Carsouel from "../components/Carsouel";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carsouel />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
