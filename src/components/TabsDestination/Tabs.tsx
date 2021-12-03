import React, { useState } from 'react';
import cn from 'classnames';
import { TabsProps } from './Tabs.props';
import styles from './Tabs.module.css';
import { TabsNav } from './TabsNav/TabsNav';
import { TabDescription } from './TabContent/TabDescription';
import { DataItem, Destination, Idx } from '../../interface/data.interface';

export const Tabs = ({ data, className, ...props }: TabsProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleTabClick = (idx: number): void => {
    setActiveIndex(idx);
  };

  const tabs = data.map(
    (dataItem: Destination, idx: number): Destination & Idx => ({
      ...dataItem,
      idx,
    })
  );

  const imgPathPNG = tabs[activeIndex].images.png;
  const imgPathWebP = tabs[activeIndex].images.webp;

  return (
    <div className={cn(styles.gridDestination, className)} {...props}>
      {/* Tabs toggles  */}
      <div className={cn(styles.tabsNavContainer, styles.nav)}>
        <TabsNav
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>

      {/* Tabs description */}
      <div className={cn(styles.tabContentContainer, styles.description)}>
        <TabDescription context={tabs[activeIndex]} />
      </div>

      {/* Tabs picture */}
      <div className={cn(styles.tabPictureContainer, styles.pic)}>
        <picture className={styles.pictureContainer}>
          <source
            srcSet={imgPathWebP}
            type='image/webp'
            className={cn(styles.pictureFit, styles.image)}
          />
          <source
            srcSet={imgPathPNG}
            type='image/png'
            className={cn(styles.pictureFit, styles.image)}
          />
          <img
            src={imgPathPNG}
            alt=''
            className={cn(styles.pictureFit, styles.image)}
          />
        </picture>
      </div>
    </div>
  );
};
