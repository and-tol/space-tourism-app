import React, { useReducer } from 'react';
import cn from 'classnames';
import { SliderTechnologyProps } from './SliderTechnology.props';
import { SliderTechnologyNav } from './SliderTechnologyNav/SliderTechnologyNav';
import { SliderTechnologyContent } from './SliderTechnologyContent/SliderTechnologyContent';
import styles from './SliderTechnology.module.css';

import { useSwipeable } from 'react-swipeable';

import {
  Direction,
  NEXT,
  PREV,
  SliderAction,
  SliderState,
} from '../../interface/Slider.types';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { onTechnologyPicOrintation } from '../../helpers/onTechnologyPicOrintation';
import { useSlides } from '../../hooks/useSlider';

export const SliderTechnology = ({
  data,
  className,
  ...props
}: SliderTechnologyProps): JSX.Element => {
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
  const { width: windowWidth } = useWindowDimensions();
  const orientation: string = onTechnologyPicOrintation(windowWidth);
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

      {/* Lslider Picture */}
      <div
        className={cn(styles.tabsPictureContainer, 'pic')}
        {...handlersPicture}
      >
        {/* <picture className={styles.pictureContainer}> */}
        <img
          src={imgPath}
          alt=''
          className={cn(styles.pictureFit, styles.image)}
        />
        {/* </picture> */}
      </div>
    </div>
  );
};

const initialState: SliderState = {
  pos: 0,
  sliding: false,
  dir: NEXT,
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
