import React from 'react';
import Header from './components/Headers';
import BannerOther from './components/BannersOther';

import Events from './components/Events';
import Footer from './components/Footer';

function EventsPage() {
  return (
    <>
      <Header />
      <BannerOther title="Events" />
      <Events/>
      <Footer />
    </>
  );
}

export default EventsPage;
