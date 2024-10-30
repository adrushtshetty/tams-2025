import React from "react";

const History = () => {
  return (
    <div>
      <div className="about_area black_bg extra_padd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section_title text-center mb-80">
                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">The History of TAMS</h3>
                <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">The first edition of TAS was held in 2013. The first edition of TAM was held in 2023. Let's take a look at how far we've come.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-top">
            <div className="col-lg-7 col-md-6">
              <div className="about_thumb">
                <div className="shap_3 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                  <img src="static/img/shape/shape_3.svg" alt="" />
                </div>
                <div className="thumb_inner wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <img src="static/img/img1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="about_info pl-68">
                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                  <i>The Amateur Scientist</i> is an esteemed science fest fostering curiosity and creativity among 8 to 12 grade students through workshops, seminars, and competitions.
                </p>
                <br />
                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                  <i>The Amateur Manager</i> focuses on cultivating managerial skills and leadership among grades 8 to 12 students through real-world business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="program_details_area detials_bg_1 overlay2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center mb-80 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <h3>Our Timeline</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="program_detail_wrap">
                {[
                  { year: "2013", title: "Inaugural edition of The Amateur Scientist (TAS)", img: "img/program_details/1.png" },
                  { year: "2014", title: "TAS grows in prominence, attracting national attention", img: "img/program_details/2.png" },
                  { year: "2015", title: "N. R. Narayana Murthy graces TAS with his presence", img: "img/program_details/3.png" },
                  { year: "2016", title: "Continued success and expansion of TAS", img: "img/program_details/4.png" },
                  { year: "2017", title: "TAS establishes itself as a premier national-level science event", img: "img/program_details/1.png" },
                  { year: "2018", title: "TAS continues to inspire and innovate", img: "img/program_details/2.png" },
                  { year: "2019", title: "Marking six successful years of TAS", img: "img/program_details/2.png" },
                  { year: "2023", title: "Inaugural edition of The Amateur Manager (TAM)", img: "img/program_details/2.png" },
                  { year: "2024", title: "The Amateur Scientist and The Amateur Manager join hands to form TAMS", img: "img/program_details/2.png", additionalText: "TAMS 2024 to be held on 31st August" }
                ].map((event, index) => (
                  <div className="single_propram" key={index}>
                    <div className="inner_wrap">
                      <div className="circle_img"></div>
                      <div className="porgram_top">
                        <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">{event.year}</span>
                        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">{event.title}</h4>
                      </div>
                      <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                        <img src={event.img} alt="" />
                      </div>
                      {event.additionalText && <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">{event.additionalText}</h4>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
