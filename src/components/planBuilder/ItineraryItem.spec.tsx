import { render, screen } from "@testing-library/react";
import ItineraryItem from "./ItineraryItem";

describe("ItineraryItem", () => {
  it("It renders with props data", () => {
    const item = { uuid: "12345", name: "South Africa" };
    render(<ItineraryItem item={item} order={1} />);
    expect(screen.getByText(/South Africa/i)).toBeInTheDocument();
  });
});
