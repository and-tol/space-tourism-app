import React from 'react';
import Link from 'next/link'
import { MenuItem } from '..';
import { MenuProps } from './Menu.props';
import styles from './menu.module.css'

export const Menu = ({ menuItems, isNum }: MenuProps): JSX.Element => {



  return (
    <nav className={styles.nav}>
      {menuItems.map((menuItem, idx) => {
        const { name, url } = menuItem
        return (
          <Link key={name} href={url} passHref>
            <MenuItem
              menuItem={name}
              idx={idx}
              isNum={isNum}
              className={styles.itemMargin}
            />
          </Link>
        );})}
    </nav>
  );
};
