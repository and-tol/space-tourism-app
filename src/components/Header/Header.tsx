import cn from 'classnames';
import React from 'react';
import { Menu, MenuMobile } from '..';
import { menuItems } from '../../../data/menu.data';
import { useMenuContext } from '../../context/app.context';
import styles from './Header.module.css';
import SpaceTourismLogo from './logo.svg';

export const Header = (): JSX.Element => {

  const { isMobileMenuView, setMobileMenuView} = useMenuContext();

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
      <MenuMobile isNum={true}  menuItems={menuItems} />
    </header>
  );
};
