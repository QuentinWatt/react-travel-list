import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("Contains a logo and a menu item", () => {
    render(<Navigation />);
    expect(screen.getByText(/Adventurio/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
