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
