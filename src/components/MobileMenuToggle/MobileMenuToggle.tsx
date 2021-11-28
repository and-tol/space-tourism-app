import CloseIcon from './close.svg';
import BurgerMenuIcon from './burger-menu.svg';
import styles from './MobileMenuToggle.module.css';
import { MenuMobileToggleProps } from './MenuMobileToggle.props';

export const MobileMenuToggle = ({
  setIsView,
  isView,
  ...props
}: MenuMobileToggleProps): JSX.Element => {
  return (
    <>
      <div className={styles.mobMenuCloseContainer} {...props}>
        <button
          className={styles.mobMenuClose}
          onClick={setIsView}
        >
          {isView && <CloseIcon />}
          {!isView && <BurgerMenuIcon />}
        </button>
      </div>
    </>
  );
};
