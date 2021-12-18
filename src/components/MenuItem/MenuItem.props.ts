import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  path: string;
  menuItem: string;
  idx: number;
  isNum: boolean;
}
