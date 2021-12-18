import { useReducer } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';

export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const CHANGE = 'CHANGE';
export type Direction = typeof PREV | typeof NEXT;

export interface SliderState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

export type SliderAction =
  | { type: Direction; numSlides: number }
  | { type: 'stopSliding' | 'reset' }
  | { type: 'CHANGE'; currentSlide: number };

interface SliderReducer {
  state: SliderState;
  handleTabClick(nextSlide: number): void;
  handlersPicture: SwipeableHandlers;
  handlersContext: SwipeableHandlers;
}

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

export const useSliderReducer = (numSlides: number): SliderReducer => {
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

  return {
    state,
    handleTabClick,
    handlersPicture,
    handlersContext,
  };
};
