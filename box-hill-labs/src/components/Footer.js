import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mb-0">&copy; 2024 Box Hill Labradors. All rights reserved.</p>
        <div className="ms-3">
          <a href="#privacy" className="mx-2">Privacy Policy</a>|
          <a href="#terms" className="mx-2">Terms and Conditions</a>|
          <a href="#contact" className="mx-2">Contact Us</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
