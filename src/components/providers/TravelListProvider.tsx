import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { TravelListItem } from "../../models/TravelListItem";

interface ListContextType {
  list: TravelListItem[];
  setList: React.Dispatch<React.SetStateAction<TravelListItem[]>>;
  addItem: Function;
  removeItem: Function;
}

const initialState: ListContextType = {
  list: [],
  setList: () => {},
  addItem: () => {},
  removeItem: () => {},
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

  const removeItem = (oldItem: TravelListItem) => {
    const revisedList = list.filter((item) => item.uuid !== oldItem.uuid);
    setList(revisedList);
  };

  return (
    <TravelListContext.Provider value={{ list, setList, addItem, removeItem }}>
      {children}
    </TravelListContext.Provider>
  );
};

export default TravelListProvider;
