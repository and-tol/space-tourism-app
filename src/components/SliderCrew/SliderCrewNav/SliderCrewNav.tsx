import React from 'react';
import cn from 'classnames';
import { SliderCrewNavProps } from './SliderCrewNav.props';
import styles from './SliderCrewNav.module.css';
import { DataItem } from '../../../interface/data.interface';
import { SliderCrewItem } from '../SliderCrewItem/SliderCrewItem';

export const SliderCrewNav = ({
  slides,
  position,
  onTabClick,
  className,
  ...props
}: SliderCrewNavProps): JSX.Element => {
  return (
    <nav className={cn(className, styles.nav)} {...props}>
      {slides?.map((slide: DataItem, idx: number): JSX.Element => {
        return (
          <SliderCrewItem
            key={idx}
            slide={slide}
            isActive={idx === position}
            onClick={() => onTabClick(idx)}
          />
        );
      })}
    </nav>
  );
};
