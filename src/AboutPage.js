import React from 'react';
import Header from './components/Headers';
import BannerOther from './components/BannersOther';
import History from './components/History';
import Footer from './components/Footer';

function AboutUs() {
  return (
    <>
      <Header />
      <BannerOther title="Our History" />
      <History/>
      <Footer />
    </>
  );
}

export default AboutUs;