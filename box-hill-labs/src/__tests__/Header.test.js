// src/__tests__/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header.js'; // Adjust path as necessary

test('renders Header with logo and title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Welcome to Box Hill Labradors/i);
  expect(titleElement).toBeInTheDocument();
});
