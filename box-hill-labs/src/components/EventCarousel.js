import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventsData from '../JSON/events.json';

function chunkArray(array, chunkSize) {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}

function EventCarousel() {
  const eventChunks = chunkArray(eventsData, 3);

  return (
    <Container id="Events" >
      <h2>Events</h2>
      <Carousel>
        {eventChunks.map((chunk,  index) => (
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

export default EventCarousel;
