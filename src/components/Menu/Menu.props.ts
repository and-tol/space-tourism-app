import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItems } from '../Header/menu.data';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLMenuElement>, HTMLMenuElement> {
  menuItems: IMenuItems[];
  isNum: boolean;
  // menuItems: typeof MenuItems;
}
