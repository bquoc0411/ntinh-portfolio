import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MyWork from "../src/pages/MyWork";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import ProjectDetail from "./components/ProjectDetail";
import { COMMERCIAL, EVENT, INTERVIEW, WEDDINGFilMS, LIFESTYLE } from "./data";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-work/wedding" element={<ProjectDetail data={WEDDINGFilMS} heading={'WEDDING FILM'}/>} />
            <Route path="/my-work/interview-podcast" element={<ProjectDetail data={INTERVIEW} heading={'INTERVIEW & PODCAST'}/>} />
            <Route path="/my-work/event" element={<ProjectDetail data={EVENT} heading={'EVENT'}/>} />
            <Route path="/my-work/commercial" element={<ProjectDetail data={COMMERCIAL} heading={'COMMERCIAL PRODUCT'}/>} />
            <Route path="/my-work/lifestyle" element={<ProjectDetail data={LIFESTYLE} heading={'LIFESTYLE'}/>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
