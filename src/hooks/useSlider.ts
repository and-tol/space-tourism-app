import { Data, DataItem, Idx, Slides } from '../interface/data.interface';

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
