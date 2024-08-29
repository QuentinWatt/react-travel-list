import { render, screen } from "@testing-library/react";
import { MenuContext } from "../providers/MenuProvider";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Navigation", () => {
  it("Contains a logo and a menu item", () => {
    const isOpen = false;
    const openMenu = vi.fn();
    const closeMenu = vi.fn();

    render(
      <MenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MenuContext.Provider>
    );

    expect(screen.getByText(/Adventurio/i)).toBeInTheDocument();
  });
});
