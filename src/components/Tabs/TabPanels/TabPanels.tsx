import React, { ReactNode } from 'react';

export interface ITabPanels {
  children: ReactNode;
}

const TabPanels = ({ children }: ITabPanels) => <div>{children}</div>;

export default TabPanels;
