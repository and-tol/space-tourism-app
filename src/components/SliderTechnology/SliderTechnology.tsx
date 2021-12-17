import React from 'react';
import cn from 'classnames';
import { SliderTechnologyProps } from './SliderTechnology.props';
import { SliderTechnologyNav } from './SliderTechnologyNav/SliderTechnologyNav';
import { SliderTechnologyContent } from './SliderTechnologyContent/SliderTechnologyContent';

import styles from './SliderTechnology.module.css';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useSlides } from '../../hooks/useSlider';
import { onTechnologyPicOrientation } from '../../helpers/onTechnologyPicOrientation';
import { useSliderReducer } from '../../hooks/useSliderReducer';

export const SliderTechnology = ({
  data,
  className,
  ...props
}: SliderTechnologyProps): JSX.Element => {
  const { slides, numSlides } = useSlides(data);

  const { state, handleTabClick, handlersContext, handlersPicture } =
    useSliderReducer(numSlides);

  // ---------------- Change Picture ---------------
  const { width: windowWidth } = useWindowDimensions();
  const orientation: string = onTechnologyPicOrientation(windowWidth);
  const imgPath: string = slides[state.pos].images[orientation];

  return (
    <div
      className={cn('pageSpaces', styles.gridTechnology, className)}
      {...props}
    >
      {/* Slider Navigation  */}
      {slides && (
        <SliderTechnologyNav
          position={state.pos}
          slides={slides}
          onTabClick={handleTabClick}
          className='nav'
        />
      )}

      {/* Slider Content */}
      <SliderTechnologyContent
        content={slides[state.pos]}
        handlers={handlersContext}
      />

      {/* Slider Picture */}
      <div
        className={cn(styles.tabsPictureContainer, 'pic')}
        {...handlersPicture}
      >
        <img
          src={imgPath}
          alt=''
          className={cn(styles.pictureFit, styles.image)}
        />
      </div>
    </div>
  );
};
