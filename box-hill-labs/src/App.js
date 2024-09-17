import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carouselmain from './components/Carouselmain';
import EventCarousel from './components/EventCarousel';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carouselmain />
      <EventCarousel />
    </div>
  );
}

export default App;
