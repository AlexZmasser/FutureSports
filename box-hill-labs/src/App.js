import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container'; 
import Image_1 from './images/image_1.jpg';
import Image_2 from './images/image_2.jpg';
import Image_3 from './images/image_3.jpg';

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
    <Carousel fade>
      <Carousel.Item>
        <img src={Image_1} alt="First slide" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image_2} alt="Second slide" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image_3} alt="Third slide" className="d-block w-100" />
      </Carousel.Item>
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
    </div>
  );
}

export default App;
