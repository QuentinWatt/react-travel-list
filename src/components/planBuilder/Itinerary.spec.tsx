import { fireEvent, render, screen, within } from "@testing-library/react";
import Itinerary from "./Itinerary";
import { TravelListContext } from "../providers/TravelListProvider";
import { TravelListItem } from "../../models/TravelListItem";

describe("Itinerary", () => {
  it("Contains a logo and a menu item", () => {
    render(<Itinerary />);
    expect(screen.getByText(/Your Travel Itinerary/i)).toBeInTheDocument();
    expect(screen.getByText(/Your itinerary is empty./i)).toBeInTheDocument();
  });

  it("Diplays a list of countries from the itinerary context", () => {
    const setList = vi.fn();
    const addItem = vi.fn();
    const removeItem = vi.fn();
    const list: TravelListItem[] = [
      { uuid: "1234", name: "South Africa" },
      { uuid: "4321", name: "New Zealand" },
    ];

    render(
      <TravelListContext.Provider
        value={{ list, setList, addItem, removeItem }}
      >
        <Itinerary />
      </TravelListContext.Provider>
    );

    expect(screen.getByText("South Africa"));
    expect(screen.getByText("New Zealand"));
    expect(screen.getAllByText(/remove/i)).toHaveLength(2);
  });

  it("Diplays a list of countries from the itinerary context", () => {
    const setList = vi.fn();
    const addItem = vi.fn();
    const removeItem = vi.fn();
    const list: TravelListItem[] = [
      { uuid: "1234", name: "Australia" },
      { uuid: "4321", name: "New Zealand" },
      { uuid: "9876", name: "South Africa" },
    ];

    render(
      <TravelListContext.Provider
        value={{ list, setList, addItem, removeItem }}
      >
        <Itinerary />
      </TravelListContext.Provider>
    );

    const countryToDelete = screen.getByText("Australia");
    expect(countryToDelete).toBeInTheDocument();
    const deleteButton = within(countryToDelete.parentElement!).getByText(
      /remove/i
    );
    fireEvent.click(deleteButton);
    expect(removeItem).toHaveBeenCalledOnce();
    expect(removeItem).toHaveBeenCalledWith({
      uuid: "1234",
      name: "Australia",
    });
  });
});
