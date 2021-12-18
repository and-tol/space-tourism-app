import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataItem, Idx } from '../../../interface/data.interface';

export interface SliderTechnologyItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
  slide: DataItem & Idx;
}
