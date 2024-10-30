import React from 'react';
import Header from './components/Headers';
import BannerOther from './components/BannersOther';
import AboutPesuC from './components/AboutPesu';
import Footer from './components/Footer';

function AboutPesuPageEle() {
  return (
    <>
      <Header />
      <BannerOther title="About PESU" />
      <AboutPesuC/>
      <Footer />
    </>
  );
}

export default AboutPesuPageEle;