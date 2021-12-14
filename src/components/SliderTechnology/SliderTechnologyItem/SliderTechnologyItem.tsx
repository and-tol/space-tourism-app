import cn from 'classnames';
// import { SliderTechnologyItemProps } from './SliderTechnologyItem.props';
import styles from './SliderTechnologyItem.module.css';
import { SliderTechnologyItemProps } from './SliderTechnologyItem.props';

export const SliderTechnologyItem = ({
  slide,
  isActive,
  className,
  ...props
}: SliderTechnologyItemProps): JSX.Element => (
  <button
    className={cn(className, styles.menuItem, {
      [styles.active]: isActive,
    })}
    key={slide.name}
    {...props}
  ></button>
);

SliderTechnologyItem.displayName = 'SliderTechnologyItem';
