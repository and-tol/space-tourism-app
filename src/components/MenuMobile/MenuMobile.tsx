import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { MenuItem, MobileMenuToggle } from '..';
import { MenuMobileProps } from './MenuMobile.props';
import styles from './MenuMobile.module.css';
import { IMenuContext, useMenuContext } from '../../context/app.context';

export const MenuMobile = ({
  menuItems,
  isNum,
  ...props
}: MenuMobileProps): JSX.Element => {
  const { isMobileMenuView, setMobileMenuView } = useMenuContext();

  return (
    <>
      <MobileMenuToggle setIsView={setMobileMenuView!} />

      {isMobileMenuView && (
        <nav
          className={cn(styles.nav, { [styles.open]: isMobileMenuView })}
          {...props}
        >
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
