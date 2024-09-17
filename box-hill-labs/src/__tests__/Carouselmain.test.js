import React from "react";
import { render, screen } from "@testing-library/react";
import Carouselmain from "../components/Carouselmain.js";
import { act } from 'react'; // Updated import

test("renders carousel with images", () => {
  render(<Carouselmain />);
  expect(screen.getByAltText(/First slide/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Second slide/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Third slide/i)).toBeInTheDocument();
});
