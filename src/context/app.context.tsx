import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface IMenuContext {
  isMobileMenuView: boolean;
  setMobileMenuView(locical: boolean): void;
}

export const MenuContext = createContext<IMenuContext>(undefined!);

export const AppContextProvider = ({
  children,
}: PropsWithChildren<IMenuContext>): JSX.Element => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

  const setMobileMenuView = (mobileMenuState: boolean): void => {
    setMobileMenuState(mobileMenuState);
  };

  return (
    <MenuContext.Provider
      value={{
        isMobileMenuView: mobileMenuState,
        setMobileMenuView,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
