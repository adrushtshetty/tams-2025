import React from 'react';
import Header from './components/Headers';
import Banner from './components/Banner';
import Pessat_Banner from './components/PESSAT_Banner';
import IndexBody from './components/IndexBody';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Pessat_Banner />
      <IndexBody />
      <Footer />
    </>
  );
}
export default HomePage;
