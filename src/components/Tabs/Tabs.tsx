import React, { ReactNode, useEffect, useState } from 'react';
import { TabsProvider } from '../../contexts/TabsContext';

export interface ITabs {
  children: ReactNode;
  className?: string;
}

const Tabs = ({ children, className }: ITabs) => {
  const [activeTab, setTab] = useState(0);
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);
  return (
    <TabsProvider value={{ activeTab, setTab }}>
      <div className={className}>{children}</div>
    </TabsProvider>
  );
};

export default Tabs;
