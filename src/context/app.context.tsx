import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface IMenuContext {
  isMobileMenuView: boolean;
  setMobileMenuView(): void;
}

export const MenuContext = createContext<IMenuContext>(undefined!);

export const AppContextProvider = ({
  isMobileMenuView,
  children,
}: PropsWithChildren<IMenuContext>): JSX.Element => {
  const [mobileMenuState, setMobileMenuState] =
    useState<boolean>(isMobileMenuView);

  const setMobileMenuView = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <MenuContext.Provider
      value={{ isMobileMenuView: mobileMenuState, setMobileMenuView }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
