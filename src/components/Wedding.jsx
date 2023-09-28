import React from "react";

const Wedding = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6 mt-5">
          <iframe
            style={{ width: "100%", height: "300px" }}
            src="https://www.youtube.com/embed/paViR6EIFyU"
            title="TRANG HUNG WEDDING 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg-6 mt-5">
          <iframe
            style={{ width: "100%", height: "300px" }}
            src="https://www.youtube.com/embed/Al73EXHX82U"
            title="SANG LINH WEDDING 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg-6 mt-5">
          <iframe
            style={{ width: "100%", height: "300px" }}
            src="https://www.youtube.com/embed/NMUBA6lrsmI"
            title="2 NAM PHUONG WEDDING"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
