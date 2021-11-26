import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItems } from '../Header/menu.data';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItems: IMenuItems[];
  isNum: boolean;
  // menuItems: typeof MenuItems;
}
