import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // ← Required for .toBeInTheDocument
import App from "./App";

test("renders login header", () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

