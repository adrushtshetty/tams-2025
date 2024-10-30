import React from "react";

const BannerOther = ({ title }) => {
  return (
    <div className="bradcam_area_index">
      <div
        className="single_bradcam d-flex align-items-center bradcam_bg_1 overlay"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/img/banner/banner.png)` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
              <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s"></p>
                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s"></p>
                <h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s"></h5>
                <h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s"></h5>
                <h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s"></h5>
              <h3 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOther;
