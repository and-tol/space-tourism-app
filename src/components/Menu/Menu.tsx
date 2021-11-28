import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { MenuItem } from '..';
import { MenuProps } from './Menu.props';
import styles from './Menu.module.css';

export const Menu = ({ menuItems, isNum }: MenuProps): JSX.Element => {
  return (
    <nav className={cn(styles.nav)}>
      {menuItems.map((menuItem, idx) => {
        const { name, url } = menuItem;
        return (
          <Link key={name} href={url} passHref>
            <MenuItem
              menuItem={name}
              idx={idx}
              isNum={isNum}
            />
          </Link>
        );
      })}
    </nav>
  );
};
