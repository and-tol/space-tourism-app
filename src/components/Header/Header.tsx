import cn from 'classnames';
import React from 'react';
import { Menu } from '..';
import styles from './Header.module.css';
import SpaceTourismLogo from './logo.svg';
import { menuItems } from './menu.data';

export const Header = (): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <div className={styles.background}></div>
      <SpaceTourismLogo className={styles.logo} />
      <div className={styles.line}></div>
      <Menu menuItems={menuItems} isNum={true} />
    </header>
  );
};
