import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { TravelListItem } from "../../models/TravelListItem";

interface ListContextType {
  list: TravelListItem[];
  setList: React.Dispatch<React.SetStateAction<TravelListItem[]>>;
  addItem: Function;
}

const initialState: ListContextType = {
  list: [],
  setList: () => {},
  addItem: () => {},
};

export const TravelListContext = createContext(initialState);

interface TravelListProviderProps {
  children: ReactNode;
}

const TravelListProvider: React.FC<TravelListProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<TravelListItem[]>([]);

  const addItem = (newItem: TravelListItem) => {
    setList([...list, newItem]);
  };

  return (
    <TravelListContext.Provider value={{ list, setList, addItem }}>
      {children}
    </TravelListContext.Provider>
  );
};

export default TravelListProvider;
