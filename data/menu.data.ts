export enum MenuItems {
  home = 'Home',
  destination = 'Destination',
  crew = 'Crew',
  technology = 'Technology',
}
type MenuItemsStrings = keyof typeof MenuItems;

// ---------
export interface IMenuItems {
  name: string;
  url: string;
}

export interface IMenuItem {
  [item: string]: string;
}

export const menuItem: IMenuItem = {
  home: 'Home',
  destination: 'Destination',
  crew: 'Crew',
  technology: 'Technology',
};

export const menuItems: IMenuItems[] = [
  {
    name: menuItem.home,
    url: '/'
  },
  {
    name: menuItem.destination,
    url: `/destination`,
  },
  {
    name: menuItem.crew,
    url: `/crew`
  },
  {
    name: menuItem.technology,
    url: `/technology`
  },
];
