// components/Header.js
import React from 'react';
const Header = () => (
  <header>
    <div className="header-area">
      <div id="sticky-header" className="main-header-area">
        <div className="container">
          <div className="header_bottom_border">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="logo_png">
                  <a href="/">
                    <img src="%PUBLIC_URL%/static/img/about/something.png" alt="" width="120" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">Our History</a></li>
                      <li><a href="/aboutPESU">About PESU</a></li>
                      <li><a href="/events">Events</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="buy_tkt">
                  <div className="book_btn">
                    <a href="https://forms.gle/DVBJk6t1zQarWdXs7" className="header-register-btn d-none d-lg-inline-block">REGISTER NOW</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
