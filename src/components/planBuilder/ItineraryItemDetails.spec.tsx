import { render, screen } from "@testing-library/react";
import ItineraryItemDetails from "./ItineraryItemDetails";

describe("ItineraryItemDetails", () => {
  it("Renders details", () => {
    render(<ItineraryItemDetails />);
    expect(screen.getByText("/Details/i")).toBeInTheDocument();
  });
});
