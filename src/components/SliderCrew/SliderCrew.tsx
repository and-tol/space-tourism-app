import React, { useState } from 'react';
import cn from 'classnames';
import { SliderCrewProps } from './SliderCrew.props';
import { SliderCrewNav } from './SliderCrewNav/SliderCrewNav';
import { SliderCrewContent } from './SliderCrewContent/SliderCrewContent';
import { Crew, Idx } from '../../interface/data.interface';
import styles from './SliderCrew.module.css';

export const SliderCrew = ({
  data,
  className,
  ...props
}: SliderCrewProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleTabClick = (idx: number): void => {
    setActiveIndex(idx);
  };

  const tabs: (Crew & Idx)[] = data.map(
    (dataItem: Crew, idx: number): Crew & Idx => ({
      ...dataItem,
      idx,
    })
  );

  const imgPathPNG: string = tabs[activeIndex].images.png;
  const imgPathWebP: string = tabs[activeIndex].images.webp;

  return (
    <div className={cn('pageSpaces', styles.gridCrew, className)} {...props}>
      {/* Tabs Navigation  */}
      {tabs && (
        <SliderCrewNav
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
          className='nav'
        />
      )}

      {/* Tabs description */}
      <SliderCrewContent
        context={tabs[activeIndex]}
        className={cn(styles.description, 'content')}
      />

      {/* Tabs picture */}
      <div className={cn(styles.tabsPictureContainer, 'pic')}>
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
