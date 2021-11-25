import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItem: string;
  idx: number;
  isNum: boolean;
}
