import { createContext, ReactNode, useContext, useState } from 'react';

export interface IMenuContext {
  isMobileMenuView: boolean;
  setMobileMenuView(locical: boolean): void;
}

export const MenuContext = createContext<IMenuContext>(undefined!);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props): JSX.Element => {
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
