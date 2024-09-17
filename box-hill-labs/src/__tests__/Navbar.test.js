import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar.js";
import { act } from 'react'; // Updated import


test("renders Navbar with links", () => {
  render(<Navbar />);
  expect(screen.getByText(/BOX HILL LABS/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/News/i)).toBeInTheDocument();
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
  expect(screen.getByText(/Players/i)).toBeInTheDocument();
  expect(screen.getByText(/Standings/i)).toBeInTheDocument();
});
