import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container'; 
import Image_1 from '../images/image_1.jpg';
import Image_2 from '../images/image_2.jpg';
import Image_3 from '../images/image_3.jpg';

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

export default Carouselmain;

