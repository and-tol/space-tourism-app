import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataItem } from '../../../interface/data.interface';

export interface SliderCrewItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
  tab: DataItem;
}
