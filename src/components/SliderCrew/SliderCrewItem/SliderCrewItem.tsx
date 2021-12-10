import cn from 'classnames';
import { SliderCrewItemProps } from './SliderCrewItem.props';
import styles from './SliderCrewItem.module.css';

export const TabItem = ({
  tab,
  isActive,
  className,
  ...props
}: SliderCrewItemProps): JSX.Element => {
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
