import cn from 'classnames';
import styles from './Header.module.css';
import SpaceTourismLogo from './logo.svg';
export const Header = (): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <SpaceTourismLogo className={styles.logo} />
    </header>
  );
};
