import { act, fireEvent, render, screen } from "@testing-library/react";
import ItineraryItem from "./ItineraryItem";
import axios from "axios";

vi.mock("axios");

describe("ItineraryItem", () => {
  it("renders with props data", () => {
    const item = { uuid: "12345", name: "South Africa" };
    render(<ItineraryItem item={item} order={1} />);
    expect(screen.getByText(/South Africa/i)).toBeInTheDocument();
  });

  it("has a 'more' button", () => {
    const item = { uuid: "12345", name: "Lesotho" };
    render(<ItineraryItem item={item} order={1} />);
    expect(screen.getByRole("button", { name: /more/i })).toBeInTheDocument();
  });

  it("has a 'remove' button", () => {
    const item = { uuid: "12345", name: "Lesotho" };
    render(<ItineraryItem item={item} order={1} />);
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
  });

  it("toggles 'more' button text when clicked", async () => {
    const item = { uuid: "12345", name: "Lesotho" };
    render(<ItineraryItem item={item} order={1} />);

    expect(screen.getByRole("button", { name: /more/i })).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /more/i }));
    });
    expect(screen.getByRole("button", { name: /hide/i })).toBeInTheDocument();
  });

  it("expands and fetches country data when the 'more' button is clicked", async () => {
    const item = { uuid: "12345", name: "Lesotho" };
    const mockResponse = {
      data: [
        {
          name: { common: "Lesotho" },
          capital: ["Maseru"],
          flags: {
            png: "https://flagcdn.com/w320/ls.png",
            alt: "Flag of Lesotho",
          },
        },
      ],
    };
    axios.get = vi.fn().mockResolvedValueOnce(mockResponse);

    render(<ItineraryItem item={item} order={1} />);

    expect(
      screen.queryByTestId("itinerary-details-wrapper")
    ).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /more/i }));
    });

    expect(screen.getByTestId("itinerary-details-wrapper")).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining("Lesotho"));

    expect(screen.queryByText(/Capital:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Maseru/i)).toBeInTheDocument();
  });
});
