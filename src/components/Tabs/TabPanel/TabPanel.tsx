import React, { ReactNode } from 'react';

export interface ITabPanel {
  children: ReactNode;
}

const TabPanel = ({ children }: ITabPanel) => <div>{children}</div>;

export default TabPanel;
