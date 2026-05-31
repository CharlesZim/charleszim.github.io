import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the hero call to action", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const cta = screen.getAllByText(/start a project/i)[0];
  expect(cta).toBeInTheDocument();
});
