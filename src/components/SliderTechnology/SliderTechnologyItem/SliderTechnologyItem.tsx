import cn from 'classnames';
// import { SliderTechnologyItemProps } from './SliderTechnologyItem.props';
import styles from './SliderTechnologyItem.module.css';
import { SliderTechnologyItemProps } from './SliderTechnologyItem.props';

export const SliderTechnologyItem = ({
  slide,
  isActive,
  className = '',
  ...props
}: SliderTechnologyItemProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.menuItem, {
        [styles.active]: isActive,
      })}
      key={slide.name}
      {...props}
    >
      {slide.idx + 1}
    </button>
  );
};

SliderTechnologyItem.displayName = 'SliderTechnologyItem';
