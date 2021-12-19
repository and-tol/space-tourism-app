import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { menuItems } from '../../../data/menu.data';
import { Menu, MenuMobile } from '../../components';
import SpaceTourismLogo from './logo.svg';
import styles from './Header.module.css';

export const Header = React.memo((): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <Link href='/'>
        <a className={styles.logo} area-label='Go to the Home page'>
          <SpaceTourismLogo />
        </a>
      </Link>
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
