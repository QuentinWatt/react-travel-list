import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Navigation", () => {
  it("Contains a logo and a menu item", () => {
    render(<Header />);
    expect(screen.getByText(/Adventurio/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
