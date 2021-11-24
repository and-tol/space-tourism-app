import React from 'react';
import { MenuItem } from '..';
import { MenuProps } from './Menu.props';
import styles from './menu.module.css'

export const Menu = ({ menuItems, isNum }: MenuProps): JSX.Element => {
  return (
    <nav className={styles.nav}>
      {menuItems.map((menuItem, idx) => (
        <MenuItem
          key={menuItem}
          menuItem={menuItem}
          idx={idx}
          isNum={isNum}
          className={styles.itemMargin}
        />
      ))}
    </nav>
  );
};
