import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { MenuItem, MobileMenuToggle } from '..';
import { MenuMobileProps } from './MenuMobile.props';
import styles from './MenuMobile.module.css';
import { useMenuContext } from '../../context/app.context';

export const MenuMobile = ({
  menuItems,
  isNum,
  ...props
}: MenuMobileProps): JSX.Element => {
  const { isMobileMenuView, setMobileMenuView } = useMenuContext();

  const closeMobileMenu = (): void => {
    setMobileMenuView(false);
  };

  return (
    <>
      <MobileMenuToggle setView={setMobileMenuView!} />

      <nav
        className={cn(styles.nav, { [styles.open]: isMobileMenuView })}
        {...props}
      >
        <div className={styles.mobMenuContainer}>
          {menuItems.map((menuItem, idx) => {
            const { name, url } = menuItem;
            return (
              <Link key={name} href={url} passHref>
                <MenuItem
                  path={url}
                  menuItem={name}
                  idx={idx}
                  isNum={isNum}
                  onClick={closeMobileMenu}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};
