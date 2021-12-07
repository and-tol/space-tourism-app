import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Data, Destination } from '../../interface/data.interface';

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Destination[];
}
