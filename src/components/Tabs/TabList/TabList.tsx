import React, { ReactNode } from 'react';

export interface ITabList {
  children: ReactNode;
}

const TabList = ({ children }: ITabList) => <div>{children}</div>;

export default TabList;
