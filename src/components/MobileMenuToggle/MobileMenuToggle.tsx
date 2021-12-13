import CloseIcon from './close.svg';
import BurgerMenuIcon from './burger-menu.svg';
import styles from './MobileMenuToggle.module.css';
import { MenuMobileToggleProps } from './MenuMobileToggle.props';
import { useState } from 'react';

export const MobileMenuToggle = ({
  setView,
  ...props
}: MenuMobileToggleProps): JSX.Element => {
  const [isShowBurger, setIsShowBurger] = useState<boolean>(true);

  const toggleMenu = (): void => {
    setView && setView(isShowBurger);
    setIsShowBurger(!isShowBurger);
  };

  return (
    <div
      className={styles.mobMenuCloseContainer}
      onClick={toggleMenu}
      {...props}
    >
      <button className={styles.mobMenuClose}>
        {isShowBurger ? <BurgerMenuIcon /> : <CloseIcon />}
      </button>
    </div>
  );
};
