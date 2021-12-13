import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { DataItem, Idx } from '../../../interface/data.interface';

export interface SliderCrewNavProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  slides: (DataItem & Idx)[];
  position: number;
  onTabClick(idx: number): void;
}
