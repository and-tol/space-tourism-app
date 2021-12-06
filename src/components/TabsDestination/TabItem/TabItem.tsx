import cn from 'classnames';
import { TabItemProps } from './TabItem.props';
import styles from './TabItem.module.css';

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
    >
      <span> {tab.name}</span>
    </button>
  );
};

TabItem.displayName = 'TabItem';
