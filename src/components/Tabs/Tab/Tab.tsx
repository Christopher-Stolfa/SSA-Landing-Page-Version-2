import React, { ReactNode, useContext } from 'react';
import { TabsContext } from '../../../contexts/TabsContext';
import { Button } from '../../Buttons';

export interface ITab {
  id: number;
  children: ReactNode;
}

const Tab = ({ id, children }: ITab) => {
  const { activeTab, setTab } = useContext(TabsContext);

  const onClick = () => {
    setTab(id);
  };

  return <Button onClick={onClick}>{children}</Button>;
};

export default Tab;
