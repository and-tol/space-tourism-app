import cn from 'classnames';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';

export const MenuItem = ({
  menuItem,
  idx,
  isNum,
  className = '',
  ...props
}: MenuItemProps): JSX.Element => {
  return (
    <div className={cn(className, styles.menuItem)} key={menuItem} {...props}>
      {isNum && <span className={styles.num}>{`0${idx}`}</span>}
      <span className={styles.text}>{menuItem}</span>
    </div>
  );
};
