import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import AboutPage from './AboutPage';
import AboutPesuPageEle from './AboutPesuPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutPESU" element={<AboutPesuPageEle />} />
      </Routes>
    </Router>
  );
}
export default App;
