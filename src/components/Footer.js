// import React, { useEffect } from 'react';

// const Footer = () => {
//     useEffect(() => {
//         // Load Google Maps API
//         const loadMapApi = () => {
//             const script = document.createElement('script');
//             script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBkknk-COtrln-pr2jglroqi0D0HhjPuu0`;
//             script.async = true;
//             script.defer = true;
//             script.onload = initMap; // Initialize map once the script has loaded
//             document.body.appendChild(script);
//         };

//         const initMap = () => {
//             const location = { lat: 12.935193456105646, lng: 77.53601664430079 };
//             const map = new window.google.maps.Map(document.getElementById('map'), {
//                 zoom: 15,
//                 center: location,
//                 styles: [
//                     {
//                         featureType: "all",
//                         stylers: [
//                             { saturation: -90 },
//                             { lightness: 50 }
//                         ]
//                     },
//                     {
//                         elementType: 'labels.text.fill',
//                         stylers: [{ color: '#ccdee9' }]
//                     }
//                 ],
//                 scrollwheel: false
//             });
//             new window.google.maps.Marker({
//                 position: location,
//                 map: map
//             });
//         };

//         loadMapApi();
//     }, []);

//     return (
//         <div className="event-page">
//             <div className="map_area">
//                 <div id="map" style={{ height: '600px', position: 'relative', overflow: 'hidden' }}></div>
//                 <div className="location_information black_bg wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
//                     <h3>PES University</h3>
//                     <div className="info_wrap">
//                         <div className="single_info">
//                             <span>Venue:</span>
//                             <p style={{ fontSize: '15px' }}>
//                                 100 Feet Ring Road, Banashankari Stage III
//                                 Dwaraka Nagar, Banashankari,
//                                 Bengaluru, Karnataka 560085
//                             </p>
//                         </div>
//                         <div className="single_info">
//                             <span>Phone:</span>
//                             <p style={{ fontSize: '15px' }}>
//                                 Travel and accommodation queries Yatharth: 6364000899<br />
//                                 General queries Lakshya: 9535528465<br />
//                                 Event queries Shreyas: 6361110359<br />
//                                 Registration queries Vineet: 8660282426
//                             </p>
//                         </div>
//                         <div className="single_info">
//                             <span>Email:</span>
//                             <p style={{ fontSize: '15px', marginLeft: '2%' }}>tams@pes.edu</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="footer">
//                 <div className="footer_top">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-6 col-md-8">
//                                 <div className="footer_widget">
//                                     <div className="footer-logo-container">
//                                         <img src="static/img/about/something.png" alt="TAS logo" className="footer-logo-image" />
//                                         <h1></h1>
//                                         <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s"></p>
//                                         <div className="row justify-content-center book_btn">
//                                             <a href="https://forms.gle/DVBJk6t1zQarWdXs7" className="register-btn">REGISTER NOW</a>
//                                         </div>
//                                         <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-left-align">
//                                             <div className="gdlr-core-divider-line gdlr-core-skin-divider" style={{ borderColor: '#303B51', borderWidth: '2px' }}></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row justify-content-center" style={{ marginRight: '-12%' }}>
//                             <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
//                                 <div className="footer_widget">
//                                     <h3 className="kingster-widget-title">Quick Links</h3>
//                                     <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
//                                         <li><a href="/">Home</a></li>
//                                         <li><a href="/aboutPESU">About PESU</a></li>
//                                         <li><a href="/about">History</a></li>
//                                         <li><a href="https://forms.gle/ormi3s4MR5g2a6Gd6">Register</a></li>
//                                         <li><a href="#">Events</a></li>
//                                         <li><a href="https://www.instagram.com/pesu.tams?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
//                                 <div className="footer_widget">
//                                     <h3 className="kingster-widget-title">Events - TAS</h3>
//                                     <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
//                                         <li><a href="/events#narrativeNexus">Narrative Nexus</a></li>
//                                         <li><a href="/events#Innovate&Automate">Innovate & Automate</a></li>
//                                         <li><a href="/events#HackaScratch">HackaScratch</a></li>
//                                         <li><a href="/events#Jeopardy">Jeopardy</a></li>
//                                         <li><a href="/events#EnggFuture">Engineering the Future</a></li>
//                                         <li><a href="/events#ScienceSymposium">Science Carnival</a></li>
//                                         <li><a href="/events#TechToxin">Tech Toxin</a></li>
//                                         <li><a href="/events#SharkTank">Shark Tank</a></li>
//                                         <li><a href="/events#GOI">Game Of Intellects</a></li>
//                                         <li><a href="/events#Gizmo">Gizmo Galore</a></li>
//                                         <li><a href="/events#Conquerors">Conquerors of Controversy</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
//                                 <div className="footer_widget">
//                                     <h3 className="kingster-widget-title">Events - TAM</h3>
//                                     <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
//                                         <li><a href="/events#Monopoly">Monopoly Madness</a></li>
//                                         <li><a href="/events#Sherlock">Operation Sherlock</a></li>
//                                         <li><a href="/events#Hand">Hidden Hand</a></li>
//                                         <li><a href="/events#Edge">Investor's Edge</a></li>
//                                         <li><a href="/events#Eureka">Eureka Expo</a></li>
//                                         <li><a href="/events#Chamber">Chamber of Reflection</a></li>
//                                         <li><a href="/events#Entertainer">The Entertainer</a></li>
//                                         <li><a href="/events#Ruins">Ruins to Riches</a></li>
//                                         <li><a href="/events#Market">Market Marvels</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
//                                 <div className="footer_widget">
//                                     <h3 className="kingster-widget-title">Contact Us</h3>
//                                     <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain" style={{ color: '#e67c1f' }}>
//                                         <li>General Queries: 9535528465</li>
//                                         <li>Event Queries: 6361110359</li>
//                                         <li>Registration Queries: 8660282426</li>
//                                         <li>Email: tams@pes.edu</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row justify-content-center" style={{ marginRight: '-12%' }}>
//                             <div className="col-md-12">
//                                 <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s"></p>
//                                 <p className="copy-right" style={{ marginTop: '0' }}>© 2024 TAMS. All rights reserved.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
    return (
        <div className="event-page">
            <div className="map_area">
                <div id="map" style={{ height: '600px', position: 'relative', overflow: 'hidden' }}>
                    {/* Google Maps iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.573875735376!2d77.5334657764105!3d12.935086915675045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1730135305633!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="location_information black_bg wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <h3>PES University</h3>
                    <div className="info_wrap">
                        <div className="single_info">
                            <span>Venue:</span>
                            <p style={{ fontSize: '15px' }}>
                                100 Feet Ring Road, Banashankari Stage III
                                Dwaraka Nagar, Banashankari,
                                Bengaluru, Karnataka 560085
                            </p>
                        </div>
                        <div className="single_info">
                            <span>Phone:</span>
                            <p style={{ fontSize: '15px' }}>
                                <br /> Travel and accommodation queries Yatharth: 6364000899
                                <br /> General queries Lakshya: 9535528465
                                <br /> Event queries Shreyas: 6361110359
                                <br /> Registration queries Vineet: 8660282426
                            </p>
                        </div>
                        <div className="single_info">
                            <span>Email:</span>
                            <p style={{ fontSize: '15px', marginLeft: '2%' }}>tams@pes.edu</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="footer_widget">
                                    <div className="footer-logo-container">
                                        <img src="static/img/about/something.png" alt="TAS logo" className="footer-logo-image" />
                                        <h1></h1>
                                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s"></p>
                                        <div className="row justify-content-center book_btn">
                                            <a href="https://forms.gle/DVBJk6t1zQarWdXs7" className="register-btn">REGISTER NOW</a>
                                        </div>
                                        <div className="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-left-align">
                                            <div className="gdlr-core-divider-line gdlr-core-skin-divider" style={{ borderColor: '#303B51', borderWidth: '2px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center" style={{ marginRight: '-12%' }}>
                            <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
                                <div className="footer_widget">
                                    <h3 className="kingster-widget-title">Quick Links</h3>
                                    <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/aboutPESU">About PESU</a></li>
                                        <li><a href="/about">History</a></li>
                                        <li><a href="https://forms.gle/ormi3s4MR5g2a6Gd6">Register</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="https://www.instagram.com/pesu.tams?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
                                <div className="footer_widget">
                                    <h3 className="kingster-widget-title">Events - TAS</h3>
                                    <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                                        <li><a href="/events#narrativeNexus">Narrative Nexus</a></li>
                                        <li><a href="/events#Innovate&Automate">Innovate & Automate</a></li>
                                        <li><a href="/events#HackaScratch">HackaScratch</a></li>
                                        <li><a href="/events#Jeopardy">Jeopardy</a></li>
                                        <li><a href="/events#EnggFuture">Engineering the Future</a></li>
                                        <li><a href="/events#ScienceSymposium">Science Carnival</a></li>
                                        <li><a href="/events#TechToxin">Tech Toxin</a></li>
                                        <li><a href="/events#SharkTank">Shark Tank</a></li>
                                        <li><a href="/events#GOI">Game Of Intellects</a></li>
                                        <li><a href="/events#Gizmo">Gizmo Galore</a></li>
                                        <li><a href="/events#Conquerors">Conquerors of Controversy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
                                <div className="footer_widget">
                                    <h3 className="kingster-widget-title">Events - TAM</h3>
                                    <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain">
                                        <li><a href="/events#Monopoly">Monopoly Madness</a></li>
                                        <li><a href="/events#Sherlock">Operation Sherlock</a></li>
                                        <li><a href="/events#Hand">Hidden Hand</a></li>
                                        <li><a href="/events#Edge">Investor's Edge</a></li>
                                        <li><a href="/events#Eureka">Eureka Expo</a></li>
                                        <li><a href="/events#Chamber">Chamber of Reflection</a></li>
                                        <li><a href="/events#Entertainer">The Entertainer</a></li>
                                        <li><a href="/events#Ruins">Ruins to Riches</a></li>
                                        <li><a href="/events#Market">Market Marvels</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3" style={{ borderLeft: '1px solid white' }}>
                                <div className="footer_widget">
                                    <h3 className="kingster-widget-title">Contact Us</h3>
                                    <ul className="gdlr-core-custom-menu-widget gdlr-core-menu-style-plain" style={{ color: '#e67c1f' }}>
                                        <li>General queries:<br />Lakshya: 9535528465</li>
                                        <li>Event queries: Shreyas: 6361110359</li>
                                        <li>Registration queries:<br />Vineet: 8660282426</li>
                                        <li>Travel and accommodation queries:<br />Yatharth: 6364000899</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text" style={{ marginTop: '-5%' }}>
                    <div className="container">
                        <div className="row">
                            <div className="footer-banner-container">
                                <img src="static/img/banner/footer_banner.png" alt="TAS logo" className="footer-banner-image" />
                                <p className="copy_right text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                                    &copy;<script>document.write(new Date().getFullYear());</script> PES University | Designed by the TAMS Technical Team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
