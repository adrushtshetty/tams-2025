import React from "react";

const Pessat_Banner = () => {
  return (
    <div className="copy-right_text" style={{backgroundColor:'#0d2040'}}>
      <div className="container" >
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="footer-banner-container">
              <img 
                src={`${process.env.PUBLIC_URL}/static/img/banner/footer_banner.png`} 
                alt="TAS logo" 
                className="footer-banner-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pessat_Banner;
