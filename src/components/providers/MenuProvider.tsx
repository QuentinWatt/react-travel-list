import { createContext, ReactNode, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const initialState: MenuContextType = {
  isOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
};

export const MenuContext = createContext(initialState);

interface MenuProviderProps {
  children: ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  return (
    <MenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
