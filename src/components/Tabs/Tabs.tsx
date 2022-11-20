import React, { ReactNode } from 'react';

export interface ITabs {
  children: ReactNode;
}

const Tabs = ({ children }: ITabs) => <div>{children}</div>;

export default Tabs;
