import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("Renders the footer", () => {
    render(<Footer />);
    expect(screen.getByText(/© copyright 2024/i)).toBeInTheDocument();
  });
});
