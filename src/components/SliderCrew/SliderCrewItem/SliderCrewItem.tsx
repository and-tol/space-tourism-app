import cn from 'classnames';
import { SliderCrewItemProps } from './SliderCrewItem.props';
import styles from './SliderCrewItem.module.css';

export const SliderCrewItem = ({
  slide,
  isActive,
  className,
  ...props
}: SliderCrewItemProps): JSX.Element => (
  <button
    className={cn(className, styles.menuItem, {
      [styles.active]: isActive,
    })}
    key={slide.name}
    {...props}
  ></button>
);

SliderCrewItem.displayName = 'TabItem';
