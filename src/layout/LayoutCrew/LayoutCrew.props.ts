import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutCrewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
