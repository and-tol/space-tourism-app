import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Technology } from '../../interface/data.interface';

export interface SliderTechnologyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Technology[];
}
