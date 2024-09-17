import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the JSON data
import newsData from '../JSON/news.json';

function NewsCarousel() {
  return (
    <Container id="News">
      <Carousel>
        {newsData.map((newsItem, index) => (
          <Carousel.Item key={index}>
            <div className="d-block w-100 p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                   borderRadius: '5px',
                   height: '300px',
                   textAlign: 'center',
                   padding: '20px' }}>
              <h3>{newsItem.title}</h3>
              <p><strong>Date:</strong> {newsItem.date}</p>
              <p>{newsItem.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default NewsCarousel;
