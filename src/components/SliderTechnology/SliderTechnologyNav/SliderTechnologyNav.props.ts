import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Idx, Technology } from '../../../interface/data.interface';

export interface SliderTechnologyNavProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  slides: (Technology & Idx)[];
  position: number;
  onTabClick(idx: number): void;
}
