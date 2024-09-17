import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react'; // Updated import

test('renders correct link text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Box Hill Labradors/i); 
  expect(linkElement).toBeInTheDocument();
});
