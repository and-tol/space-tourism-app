import CloseIcon from './close.svg';
import BurgerMenuIcon from './burger-menu.svg';
import styles from './MobileMenuToggle.module.css';
import { MenuMobileToggleProps } from './MenuMobileToggle.props';
import { useState } from 'react';

export const MobileMenuToggle = ({
  setIsView,
  ...props
}: MenuMobileToggleProps): JSX.Element => {
  const [isShowBurger, setIsShowBurger] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsView();
    setIsShowBurger(!isShowBurger);
  };

  return (
    <>
      <div className={styles.mobMenuCloseContainer} {...props}>
        <button className={styles.mobMenuClose} onClick={toggleMenu}>
          {isShowBurger ? <BurgerMenuIcon /> : <CloseIcon />}
        </button>
      </div>
    </>
  );
};
