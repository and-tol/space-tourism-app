import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { MenuItem } from '..';
import { MenuMobileProps } from './MenuMobile.props';
import styles from './MenuMobile.module.css';

export const MenuMobile = ({
  menuItems,
  isNum,
  isView,
  ...props
}: MenuMobileProps): JSX.Element => {
  return (
    <>
      {isView && (
        <nav className={cn(styles.nav, { [styles.open]: isView })} {...props}>
          <div className={styles.mobMenuContainer}>
            {menuItems.map((menuItem, idx) => {
              const { name, url } = menuItem;
              return (
                <Link key={name} href={url} passHref>
                  <MenuItem menuItem={name} idx={idx} isNum={isNum} />
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
};
