import React from 'react';
import cn from 'classnames';
import styles from './SliderTechnologyNav.module.css';
import { Idx, Technology } from '../../../interface/data.interface';
import { SliderTechnologyNavProps } from './SliderTechnologyNav.props';
import { SliderTechnologyItem } from '../SliderTechnologyItem/SliderTechnologyItem';

export const SliderTechnologyNav = ({
  slides,
  position,
  onTabClick,
  className,
  ...props
}: SliderTechnologyNavProps): JSX.Element => {
  return (
    <nav className={cn(className, styles.nav)} {...props}>
      {slides?.map((slide: Technology & Idx, idx: number): JSX.Element => {
        return (
          <SliderTechnologyItem
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
