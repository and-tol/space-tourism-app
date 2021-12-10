import React from 'react';
import cn from 'classnames';
import { SliderCrewNavProps } from './SliderCrewNav.props';
import styles from './SliderCrewNav.module.css';
import { DataItem } from '../../../interface/data.interface';
import { TabItem } from '../SliderCrewItem/SliderCrewItem';

export const SliderCrewNav = ({
  tabs,
  activeIndex,
  onTabClick,
  className,
  ...props
}: SliderCrewNavProps): JSX.Element => {
  return (
    <nav className={cn(className, styles.nav)} {...props}>
      {tabs.map((tab: DataItem, idx: number): JSX.Element => {
        return (
          <TabItem
            key={idx}
            tab={tab}
            isActive={idx === activeIndex}
            onClick={() => onTabClick(idx)}
          />
        );
      })}
    </nav>
  );
};
