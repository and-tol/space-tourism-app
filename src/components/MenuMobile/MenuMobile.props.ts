import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItems } from '../../../data/menu.data';

export interface MenuMobileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItems: IMenuItems[];
  isNum: boolean;
  isView: boolean;
  // menuItems: typeof MenuItems;
}
