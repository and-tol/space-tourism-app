import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';
import { useRouter } from 'next/dist/client/router';

export const MenuItem = forwardRef(
  (
    { path, menuItem, idx, isNum, className, ...props }: MenuItemProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ): JSX.Element => {
    const { pathname } = useRouter();

    return (
      <a
        className={cn(className, styles.menuItem, {
          [styles.active]: path === pathname,
        })}
        key={menuItem}
        {...props}
        ref={ref}
      >
        {isNum && <span className={styles.num}>{`0${idx}`}</span>}
        <span className={styles.text}>{menuItem}</span>
      </a>
    );
  }
);

MenuItem.displayName = 'MenuItem';
