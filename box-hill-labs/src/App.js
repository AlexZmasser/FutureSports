import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container'; 
import Image_1 from './images/image_1.jpg';
import Image_2 from './images/image_2.jpg';
import Image_3 from './images/image_3.jpg';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventsData from './JSON/events.json';

function Header() {
  return (
    <div className="container">
      <img src={require('./images/Logo.png') } alt="" height="100" style={{ float: "left" }} />
      <h1>Welcome to Box Hill Labradors</h1>
    </div>
  );
}

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BOX HILL LABS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#News">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Players">Players</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sr-widget">Standings</a>
              </li>
            </ul>
            <button type="button" className="btn btn-info">Contact</button>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Carouselmain() {
  return (
    <Container>
      <Carousel fade style={{ width: '100%', height: '700px' }}>
        <Carousel.Item>
          <img 
            src={Image_1} 
            alt="First slide" 
            className="d-block w-100" 
            style={{ width: '100%', height: '700px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={Image_2} 
            alt="Second slide" 
            className="d-block w-100" 
            style={{ width: '100%', height: '700px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={Image_3} 
            alt="Third slide" 
            className="d-block w-100" 
            style={{ width: '100%', height: '700px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

function chunkArray(array, chunkSize) {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

function EventCarousel() {
  // Group events into chunks of 3 to display 3 per carousel item
  const eventChunks = chunkArray(eventsData, 3);

  return (
    <Container>
      <Carousel>
        {eventChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((event, eventIndex) => (
                <Col md={4} key={eventIndex}>
                  <div className="event-item p-3" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <h4>{event.eventName}</h4>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Start Time:</strong> {event.startTime}</p>
                    <p><strong>End Time:</strong> {event.endTime}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p>{event.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carouselmain />
      < EventCarousel />
    </div>
  );
}

export default App;
