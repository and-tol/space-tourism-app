import cn from 'classnames';
import React from 'react';
import { menuItems } from '../../../data/menu.data';
import { Menu, MenuMobile } from '../../components';
import styles from './Header.module.css';
import SpaceTourismLogo from './logo.svg';

export const Header = React.memo((): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <SpaceTourismLogo className={styles.logo} />
      <div className={styles.menuContainer}>
        <div className={styles.headerDecoration}>
          <div className={styles.background}></div>
          <div className={styles.line}></div>
        </div>
        <Menu menuItems={menuItems} isNum={true} />
      </div>
      <MenuMobile isNum={true} menuItems={menuItems} />
    </header>
  );
});

Header.displayName = 'Header';
