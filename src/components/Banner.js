import React from "react";

const Banner = () => {
  return (
    <div className="bradcam_area_index">
      <div
        className="single_bradcam d-flex align-items-center bradcam_bg_1 overlay"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/banner/banner.png)` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s"></p>
                <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">31st August 2024</span>
                <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">TAMS 2024</h3>
                <h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">PES University, RR Campus</h5>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
