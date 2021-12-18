import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataItem, DestinationContext, Idx } from '../../../interface/data.interface';

export interface TabDescriptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  context: DataItem & Idx;
}
