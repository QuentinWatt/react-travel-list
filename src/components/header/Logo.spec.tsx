import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it('Contains the text "Adventurio"', () => {
    render(<Logo />);
    expect(screen.getByText(/Adventurio/i)).toBeInTheDocument();
  });
});
