import React, { ReactNode } from 'react';

export interface ITab {
  children: ReactNode;
}

const Tab = ({ children }: ITab) => <div>{children}</div>;

export default Tab;
