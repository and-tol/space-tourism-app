import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';

export const MenuItem = forwardRef(
  (
    { menuItem, idx, isNum, className = '', ...props }: MenuItemProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(className, styles.menuItem)}
        key={menuItem}
        {...props}
        ref={ref}
      >
        {isNum && <span className={styles.num}>{`0${idx}`}</span>}
        <span className={styles.text}>{menuItem}</span>
      </div>
    );
  }
);

MenuItem.displayName = 'MenuItem';
