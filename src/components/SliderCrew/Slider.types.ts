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
  | { type: "CHANGE"; currentSlide: number};
