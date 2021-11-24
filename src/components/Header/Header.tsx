import styles from './Header.module.css';
import SpaceTourismLogo from './logo.svg';
export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <SpaceTourismLogo />
    </header>
  );
};
