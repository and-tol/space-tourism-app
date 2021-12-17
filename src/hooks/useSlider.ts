import { Data, DataItem, Idx } from '../interface/data.interface';

interface Slides {
  slides: (DataItem & Idx)[];
  numSlides: number;
}

export const useSlides = (data: Data): Slides => {
  const slides: (DataItem & Idx)[] = data.map(
    (dataItem: DataItem, idx: number): DataItem & Idx => ({
      ...dataItem,
      idx,
    })
  );

  return {
    slides,
    numSlides: slides.length,
  };
};
