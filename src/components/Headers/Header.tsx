import React, { ReactNode } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  children?: ReactNode;
}

/**
 * A Header component that returns a styled header dending on the type
 * @component
 */
const Header = ({ as = 'h4', children }: IHeaderProps) => {
  return (
    <>
      {as === 'h1' && <h1>{children}</h1>}
      {as === 'h2' && <h2 className={styles[as]}>{children}</h2>}
      {as === 'h3' && <h3 className={styles[as]}>{children}</h3>}
      {as === 'h4' && <h4 className={styles[as]}>{children}</h4>}
    </>
  );
};

export default Header;
