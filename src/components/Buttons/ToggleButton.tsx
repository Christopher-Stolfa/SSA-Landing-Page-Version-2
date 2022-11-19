import React from 'react';
import Button, { IButtonProps } from './Button';
import styles from './Toggle.module.scss';

interface IToggleButtonProps extends IButtonProps {
  active: boolean;
}

const ToggleButton = ({ active, children }: IToggleButtonProps) => (
  <Button variant={active ? 'cream-invert' : 'cream'}>
    {children}:{active}
  </Button>
);

export default ToggleButton;
