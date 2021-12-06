import React from 'react';
import { TabsNavProps } from './TabsNav.props';
import styles from './TabsNav.module.css';
import { DataItem } from '../../../interface/data.interface';
import { TabItem } from '../TabItem/TabItem';

export const TabsNav = ({
  tabs,
  activeIndex,
  onTabClick,
  ...props
}: TabsNavProps): JSX.Element => {
  return (
    <nav className={styles.nav} {...props}>
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
