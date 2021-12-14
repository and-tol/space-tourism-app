import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataItem } from '../../../interface/data.interface';

export interface SliderTechnologyItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
  slide: DataItem;
}
