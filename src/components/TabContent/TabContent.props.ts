import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DestinationContext } from '../../interface/data.interface';

export interface TabContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  context: DestinationContext;
}
