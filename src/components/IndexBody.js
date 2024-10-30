import React from "react";

const IndexBody = () => {
    return (
        <div className="about_area black_bg">
            <div className="container">
                <h3></h3>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center mb-80">
                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                TAMS: Where Science and Commerce Meets Fun and Innovation!
                            </h3>
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                                Step into The Amateur Managers and Scientists (TAMS), where passion meets innovation! Join us for an exciting journey through the realms of science and management, designed to inspire and challenge amateur enthusiasts. This year, we're bringing together the brightest minds from grades 8 to 12 from various institutions across India. Get ready for an unforgettable experience filled with learning, competition, and collaboration.<br />
                                TAMS is more than just an event—it's a celebration of creativity and ingenuity. Engage in thought-provoking discussions, participate in hands-on workshops, and showcase your talents in our various competitions. Connect with like-minded peers, mentors, and industry experts who share your passion for science and management.<br />
                                Join us at TAMS 2024 and discover a universe of possibilities. See you there!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video_area" style={{ backgroundColor: "orange", padding: "100px 0" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section_title text-center mb-80">
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Event Highlights</h3>
                                <div className="video_container wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", background: "#000" }}>
                                    <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/6j0ssb_ZJos?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div className="text_content wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s" style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
                                    <p>
                                        Experience the buzz and excitement of TAMS 2024 with our event highlight video. Get a sneak peek into the incredible projects, activities, and moments that await you at this year's fest. Whether you're a science whiz, a future business tycoon, or simply curious about the world of innovation, this video is a must-watch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="about_area black_bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section_title text-center mb-80">
                                <img src="static/img/1&2.png" alt="TAMS Logo" width="170" />
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                    TAMS is Back <br /> and Better Than Ever!
                                </h3>
                                <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                                    TAMS is back and ready to rock your world! This year promises to be bigger, better, and more mind-blowing than ever before. With a plethora of events and activities designed to tickle your brain cells and ignite your creativity, TAMS 2024 is the place to be. Join us in celebrating the spirit of innovation and collaboration. Get ready to explore new ideas, create groundbreaking projects, and connect with like-minded peers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default IndexBody;
