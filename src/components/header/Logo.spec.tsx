import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "./Logo";

describe("Logo", () => {
  it('Contains the text "Adventurio"', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    expect(screen.getByText(/Adventurio/i)).toBeInTheDocument();
  });
});
