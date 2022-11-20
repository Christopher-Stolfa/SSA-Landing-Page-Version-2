import React, { createContext, Dispatch } from 'react';

export interface ITabsContextType {
  setTab: Dispatch<React.SetStateAction<number>>;
  activeTab: number;
}

const tabsContext: ITabsContextType = {
  setTab: () => {},
  activeTab: 0,
};

const TabsContext = createContext(tabsContext);
const TabsProvider = TabsContext.Provider;

export { TabsContext, TabsProvider };
