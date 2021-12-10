import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItems } from '../../interface/menu.interface';

export interface MenuMobileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItems: IMenuItems[];
  isNum: boolean;
}
