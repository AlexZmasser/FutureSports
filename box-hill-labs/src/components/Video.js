import React from 'react';
import myVideo from '../video/baseball-player-slides-into-home-plate-slow-motion-SBV-347577896-preview.mp4'; 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoComponent() {
  return (
    <Container> 
    <div className="video-container">
      <video autoPlay muted loop id="video" width="100%">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </Container>
  );
}

export default VideoComponent;
