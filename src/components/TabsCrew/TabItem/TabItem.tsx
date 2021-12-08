import cn from 'classnames';
import styles from './TabItem.module.css';
import { TabItemProps } from './TabItem.props';

export const TabItem = ({
  tab,
  isActive,
  className,
  ...props
}: TabItemProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.menuItem, {
        [styles.active]: isActive,
      })}
      key={tab.name}
      {...props}
    ></button>
  );
};

TabItem.displayName = 'TabItem';
