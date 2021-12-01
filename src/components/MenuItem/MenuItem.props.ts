import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: string;
  menuItem: string;
  idx: number;
  isNum: boolean;
}
