import React, { useState } from 'react';
import cn from 'classnames';
import { TabsProps } from './Tabs.props';
import { TabsNav } from './TabsNav/TabsNav';
import { TabDescription } from './TabContent/TabDescription';
import { Destination, Idx } from '../../interface/data.interface';
import styles from './Tabs.module.css';

export const Tabs = ({ data, className, ...props }: TabsProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleTabClick = (idx: number): void => {
    setActiveIndex(idx);
  };

  const tabs: (Destination & Idx)[] = data.map(
    (dataItem: Destination, idx: number): Destination & Idx => ({
      ...dataItem,
      idx,
    })
  );

  const imgPathPNG: string = tabs[activeIndex].images.png;
  const imgPathWebP:string = tabs[activeIndex].images.webp;

  return (
    <div
      className={cn('pageSpaces', styles.gridDestination, className)}
      {...props}
    >
      {/* Tabs Navigation  */}
      {tabs && (
        <TabsNav
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
          className='gridAreaNav'
        />
      )}

      {/* Tabs description */}
        <TabDescription
          context={tabs[activeIndex]}
          className={cn(styles.description)}
        />

      {/* Tabs picture */}
      <div className={cn(styles.tabsPictureContainer, styles.pic)}>
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
