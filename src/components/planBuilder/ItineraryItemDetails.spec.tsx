import { render, screen } from "@testing-library/react";
import ItineraryItemDetails from "./ItineraryItemDetails";

describe("ItineraryItemDetails", () => {
  it("Renders with empty data", () => {
    const country = null;
    render(<ItineraryItemDetails country={country} />);
    expect(screen.getByTestId("itinerary-details-wrapper")).toBeInTheDocument();
  });

  it("Renders the country capital", () => {
    const country = {
      name: {
        common: "Lesotho",
        official: "Lesotho",
      },
      capital: ["Maseru"],
    };
    render(<ItineraryItemDetails country={country} />);
    expect(screen.getByText("Capital:")).toBeInTheDocument();
    expect(screen.getByText("Maseru")).toBeInTheDocument();
  });

  it("contains a country flag", () => {
    const country = {
      name: {
        common: "Lesotho",
        official: "Lesotho",
      },
      flags: {
        png: "https://flagcdn.com/w320/ls.png",
        alt: "The flag of Lesotho",
      },
    };
    render(<ItineraryItemDetails country={country} />);
    const image = screen.getByRole("img");
    expect(screen.queryByText("Flag:")).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://flagcdn.com/w320/ls.png");
    expect(image).toHaveAttribute("alt", "The flag of Lesotho");
  });

  it("does not an image if country flag is undefined", () => {
    const country = {
      name: {
        common: "Lesotho",
        official: "Lesotho",
      },
    };
    render(<ItineraryItemDetails country={country} />);
    expect(screen.queryByText("Flag:")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("Renders displays different currencies", () => {
    const country = {
      name: {
        common: "Lesotho",
        official: "Lesotho",
      },
      currencies: {
        LSL: {
          name: "Lesotho loti",
          symbol: "L",
        },
        ZAR: {
          name: "South African rand",
          symbol: "R",
        },
      },
    };
    render(<ItineraryItemDetails country={country} />);
    expect(screen.getByText("Currency:")).toBeInTheDocument();
    expect(screen.getByText("L Lesotho loti")).toBeInTheDocument();
    expect(screen.getByText("R South African rand")).toBeInTheDocument();
  });

  it("does not show currencies if they are undefined", () => {
    const country = {
      name: {
        common: "Lesotho",
        official: "Lesotho",
      },
    };
    render(<ItineraryItemDetails country={country} />);
    expect(screen.queryByText("Currency:")).not.toBeInTheDocument();
    expect(screen.queryByText("L Lesotho loti")).not.toBeInTheDocument();
    expect(screen.queryByText("R South African rand")).not.toBeInTheDocument();
  });
});
