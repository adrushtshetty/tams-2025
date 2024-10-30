import React from 'react';

const AboutPesuC = () => {
    return (
        <div className="about_area black_bg extra_padd">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center mb-80">
                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">About the Founder</h3>
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                                In 1972, PES was founded in Bangalore with just over 40 students. Today, we have more than 18,000 students spread across four different campuses in Karnataka and Andhra Pradesh.
                            </p>
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
                                <img src="static/img/about/dr.jpg" alt="" />
                                <br />
                                <h4 className="wow fadeInLeft" data-wow-duration="1s" style={{ color: 'white', fontSize: '40px', marginTop: '5%' }} data-wow-delay=".5s">Dr. M. R. Doreswamy</h4>
                                <h5 className="wow fadeInLeft" data-wow-duration="1s" style={{ color: 'white', fontStyle: 'italic' }} data-wow-delay=".5s">Chancellor, PES University</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="about_info pl-68">
                            <h4 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Perseverance. Excellence. Service</h4>
                            <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                                It is our unwavering commitment to the highest quality education that has sped us along on this journey. I would also like to thank the generations of parents who have entrusted us with the care and education of their children.
                            </p>
                            <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                                It is their faith and belief in the PES values – Perseverance, Excellence, and Service – that has helped us come this far. I believe that education has a pivotal role to play in the progress of a nation. We realize that our students represent the future of our society, and we take our responsibility seriously.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="section_title text-center mb-80">
                            <br />
                            We ensure that the rock-solid foundation we help them build here – both in terms of skills and values – will stand them in good stead no matter which career they choose. Along with the requisite academic and related skills, we try to instill empathy in our students for the less fortunate and a concern for the environment around them.
                            <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s"></p>
                            <br />
                            <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                                We create opportunities not just for young people to learn, but also for them to experience the fulfillment that comes from sharing this learning with others. At PES, we will always be focused on delivering education that will help create the leaders of tomorrow’s world – men and women who will not just be successful in their capacities, but also contribute to and enrich the world they live in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div className="about_info align-items-center">
                                <div className="container box_1170">
                                    <h3 className="text-heading">About PESU</h3>
                                    <p className="sample-text">
                                        Located in Bangalore, India, PES University is one of the country's premier teaching and research institutions, dedicated to providing navigation for the real world and inspiring students to find their true north. Graduates are equipped to thrive in a constantly evolving intellectual and technological landscape through the collaborative efforts of management, staff, students, and parents. The university fosters a vibrant student community with diverse interests pursued through various clubs and teams, including debates, and the renowned PES band, with many events hosted in the air-conditioned auditorium.
                                    </p>
                                </div>
                                <div className="feature-img">
                                    <img className="img-fluid" style={{ marginLeft: '30%', width: '35%', height: 'auto' }} src="static/img/about/mrdBlock.jpg" alt="" />
                                </div>
                                <p className="wow fadeInLeft" data-wow-duration="1s" style={{ marginLeft: '10%', marginRight: '10%' }} data-wow-delay=".6s">
                                    PES University's vision is to cultivate a globally competitive, professionally adept, and ethically sound workforce. The university aims to impart in its students a firm grounding in history, ethical values, commitment to law and morality, appreciation of human creativity, and an analytical mindset. The campus boasts top-notch facilities, including well-lit classrooms, cutting-edge laboratories, fully equipped workshops, secure hostels, modern cafeterias, and excellent sports and recreation facilities, ensuring a vibrant campus life. With three state-of-the-art campuses in Bangalore and an international campus in South Asia, PES University offers a life-changing educational experience, setting students up for a successful future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPesuC;
