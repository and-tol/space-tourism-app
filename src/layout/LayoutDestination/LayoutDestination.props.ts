import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutDestinationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
