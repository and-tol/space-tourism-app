import React from 'react';
import cn from 'classnames';
import { SliderCrewProps } from './SliderCrew.props';
import { SliderCrewNav } from './SliderCrewNav/SliderCrewNav';
import { SliderCrewContent } from './SliderCrewContent/SliderCrewContent';
import { useSlides } from '../../hooks/useSlider';

import styles from './SliderCrew.module.css';

import { useSliderReducer } from '../../hooks/useSliderReducer';

export const SliderCrew = ({
  data,
  className,
  ...props
}: SliderCrewProps): JSX.Element => {
  const { slides, numSlides } = useSlides(data);

  const { state, handleTabClick, handlersContext, handlersPicture } =
    useSliderReducer(numSlides);

  // ---------------- Change Picture ----------
  const imgPathPNG: string = slides[state.pos].images.png;
  const imgPathWebP: string = slides[state.pos].images.webp;

  return (
    <div className={cn('pageSpaces', styles.gridCrew, className)} {...props}>
      {/* Slider Navigation  */}
      {slides && (
        <SliderCrewNav
          position={state.pos}
          slides={slides}
          onTabClick={handleTabClick}
          className='nav'
        />
      )}

      {/* Slider Content */}
      <SliderCrewContent
        context={slides[state.pos]}
        handlers={handlersContext}
      />

      {/* Lslider Picture */}
      <div
        className={cn(styles.tabsPictureContainer, 'pic')}
        {...handlersPicture}
      >
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
