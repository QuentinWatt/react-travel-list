import { render, screen, fireEvent } from "@testing-library/react";
import CountrySearchItem from "./CountrySearchItem";

describe("CountrySearchItem", () => {
  it("Renders with prop data", () => {
    const addItemMock = vi.fn();
    const country = {
      name: {
        common: "England",
        official: "England",
      },
    };

    render(<CountrySearchItem country={country} onSelected={addItemMock} />);
    expect(screen.getByText(/England/i)).toBeInTheDocument();
  });

  it("Renders calls the addItem function onSelected", () => {
    const addItemMock = vi.fn();
    const country = {
      name: {
        common: "England",
        official: "England",
      },
    };

    render(<CountrySearchItem country={country} onSelected={addItemMock} />);
    const button = screen.getByText(/Add/i);
    fireEvent.click(button);
    expect(addItemMock).toHaveBeenCalledOnce();
  });
});
