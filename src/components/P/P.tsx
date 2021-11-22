import { PProps } from './P.props';
import styles from './Heading.module.css';

export const Heading = ({
  children,
  ...props
}: PProps): JSX.Element => {


  return (
    <p className={styles.p} {...props}>
      {children}
    </p>
  );
};
