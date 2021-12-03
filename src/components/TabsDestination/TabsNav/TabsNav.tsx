import React from 'react';
import cn from 'classnames';
import { TabsNavProps } from './TabsNav.props';
import styles from './TabsNav.module.css';
import { TabItem } from '../..';
import { DataItem } from '../../../interface/data.interface';

export const TabsNav = ({
  tabs,
  activeIndex,
  onTabClick,
}: TabsNavProps): JSX.Element => {
  return (
    <nav className={cn(styles.nav)}>
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
