import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
