import { render, screen } from "@testing-library/react";
import Panel from "./Panel";

describe("Button", () => {
  it("Renders with child props", () => {
    render(<Panel>My panel</Panel>);
    expect(screen.getByText(/My panel/i)).toBeInTheDocument();
  });
});
