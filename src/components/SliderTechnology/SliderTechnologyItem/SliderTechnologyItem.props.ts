import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Idx, Technology } from '../../../interface/data.interface';

export interface SliderTechnologyItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
  slide: Technology & Idx;
}
