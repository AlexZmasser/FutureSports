import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carouselmain from './components/Carouselmain';
import EventCarousel from './components/EventCarousel';
import NewsCarousel from './components/NewsSection';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carouselmain />
      <NewsCarousel />
      <EventCarousel />
    </div>
  );
}

export default App;
