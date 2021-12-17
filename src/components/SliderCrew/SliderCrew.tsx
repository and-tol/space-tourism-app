import React, { useMemo, useReducer } from 'react';
import cn from 'classnames';
import { SliderCrewProps } from './SliderCrew.props';
import { SliderCrewNav } from './SliderCrewNav/SliderCrewNav';
import { SliderCrewContent } from './SliderCrewContent/SliderCrewContent';
import { Crew, Idx } from '../../interface/data.interface';
import styles from './SliderCrew.module.css';

import { useSwipeable } from 'react-swipeable';

import {
  Direction,
  NEXT,
  PREV,
  SliderAction,
  SliderState,
} from './Slider.types';
import { useSlides } from '../../hooks/useSlider';

export const SliderCrew = ({
  data,
  className,
  ...props
}: SliderCrewProps): JSX.Element => {
  const { slides, numSlides } = useSlides(data);

  // ------ react-swipeable --------
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTabClick = (nextSlide: number): void => {
    dispatch({ type: 'CHANGE', currentSlide: nextSlide });
  };
  const onSlide = (dir: Direction) => {
    dispatch({ type: dir, numSlides });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };
  const handlersPicture = useSwipeable({
    // onSwiped: eventData => console.log('User Swiped Picture!', eventData),
    onSwipedLeft: () => onSlide(NEXT),
    onSwipedRight: () => onSlide(PREV),
    trackMouse: true,
  });
  const handlersContext = useSwipeable({
    // onSwiped: eventData => console.log('User Swiped Context!', eventData),
    onSwipedLeft: () => onSlide(NEXT),
    onSwipedRight: () => onSlide(PREV),
    trackMouse: true,
  });

  // ---------------- Change Picture
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

const initialState: SliderState = {
  pos: 0,
  sliding: false,
  dir: NEXT
};

function reducer(state: SliderState, action: SliderAction): SliderState {
  switch (action.type) {
    case 'reset':
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numSlides - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numSlides - 1 ? 0 : state.pos + 1,
      };
    case 'CHANGE':
      return {
        ...state,
        sliding: true,
        pos: action.currentSlide,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}
