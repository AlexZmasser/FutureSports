import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from '../App';

test('renders correct link text', () => {
  render(<App />);
  // Update the text here to match what's actually rendered by your App component
  const linkElement = screen.getByText(/Welcome to Box Hill Labradors/i); 
  expect(linkElement).toBeInTheDocument();
});
