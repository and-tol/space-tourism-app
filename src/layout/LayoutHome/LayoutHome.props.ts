import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutHomeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
