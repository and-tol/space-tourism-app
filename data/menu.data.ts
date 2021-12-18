import { IMenuItem, IMenuItems } from '../src/interface/menu.interface';

export const menuItem: IMenuItem = {
  home: 'Home',
  destination: 'Destination',
  crew: 'Crew',
  technology: 'Technology',
};

export const menuItems: IMenuItems[] = [
  {
    name: menuItem.home,
    url: '/',
  },
  {
    name: menuItem.destination,
    url: `/destination`,
  },
  {
    name: menuItem.crew,
    url: `/crew`,
  },
  {
    name: menuItem.technology,
    url: `/technology`,
  },
];
