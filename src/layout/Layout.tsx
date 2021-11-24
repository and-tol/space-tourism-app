import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={styles.mainContainer}>{children}</div>;
};
