import React, { ReactNode, useEffect, useState } from 'react';
import { TabsProvider } from '../../contexts/TabsContext';

export interface ITabs {
  children: ReactNode;
}

const Tabs = ({ children }: ITabs) => {
  const [activeTab, setTab] = useState(0);
  useEffect(() => {
    console.log(children);
  }, []);
  return (
    <>
      <TabsProvider value={{ activeTab, setTab }}>{children}</TabsProvider>
    </>
  );
};

export default Tabs;
