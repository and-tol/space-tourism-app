export enum MenuItems {
  Home = 'Home',
  Destination = 'Destination',
  Crew = 'Crew',
  Technology = 'Technology',
}
type MenuItemsStrings = keyof typeof MenuItems;

export const menuItems = [
  MenuItems.Home,
  MenuItems.Destination,
  MenuItems.Crew,
  MenuItems.Technology,
];
