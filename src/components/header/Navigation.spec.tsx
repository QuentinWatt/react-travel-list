import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import { MenuContext } from "../providers/MenuProvider";

describe("Navigation", () => {
  it("renders the navigation", () => {
    const isOpen = true;
    const openMenu = vi.fn();
    const closeMenu = vi.fn();

    render(
      <MemoryRouter>
        <MenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
          <Navigation />
        </MenuContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
