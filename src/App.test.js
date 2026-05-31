import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the spatial hub with the prompt", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/what are we building/i)).toBeInTheDocument();
  expect(screen.getAllByText(/charles zimmerlin/i).length).toBeGreaterThan(0);
});
