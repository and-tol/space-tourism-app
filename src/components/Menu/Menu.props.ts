import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLMenuElement>, HTMLMenuElement> {
  menuItems: string[];
  isNum: boolean;
  // menuItems: typeof MenuItems;
}
