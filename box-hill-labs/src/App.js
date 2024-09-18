import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carouselmain from './components/Carouselmain';
import EventCarousel from './components/EventCarousel';
import NewsCarousel from './components/NewsSection';
import PlayerTable from "./components/PlayerTable"; 
import VideoComponent from "./components/Video"; 
import SportsRadarWidget from "./components/SportsRadarWidget";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carouselmain />
      <NewsCarousel />
      <EventCarousel />
      <PlayerTable />
      <VideoComponent />
      <SportsRadarWidget />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
