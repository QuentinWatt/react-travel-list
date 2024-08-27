import { render, screen } from "@testing-library/react";
import DropdownOverlay from "./DropdownOverlay";

describe("DropdownOverlay", () => {
  it("renders with children", () => {
    render(<DropdownOverlay>Inner text.</DropdownOverlay>);
    expect(screen.getByText(/Inner text./i)).toBeInTheDocument();
  });
});
