import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataItem, Idx } from '../../../interface/data.interface';

export interface TabContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  context: DataItem & Idx;
}
