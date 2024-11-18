import React from 'react';
import Header from './components/Headers';
import BannerOther from './components/BannersOther';

import AdminEvents from './components/AdminEvents';
import AddEvents from './components/AddEvents';
import Footer from './components/Footer';

function EventsAdmin() {
  return (
    <>
      <Header />
      <BannerOther title="Events" />
      <AdminEvents/>
      <AddEvents/>
    </>
  );
}

export default EventsAdmin;