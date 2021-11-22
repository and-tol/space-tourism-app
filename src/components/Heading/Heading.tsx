import { HeadingProps } from './Heading.props';
import cn from 'classnames';
import styles from './Heading.module.css';

export const Heading = ({
  tag,
  className,
  children,
  ...props
}: HeadingProps): JSX.Element => {
  const Tag = tag || 'h1';

  // switch (tag) {
  //   case 'h1':
  //     return (
  //       <Tag className={styles.h1} {...props}>
  //         {children}
  //       </Tag>
  //     );
  //   case 'h2':
  //     return (
  //       <Tag className={styles.h2} {...props}>
  //         {children}
  //       </Tag>
  //     );
  //   case 'h3':
  //     return (
  //       <Tag className={styles.h3} {...props}>
  //         {children}
  //       </Tag>
  //     );
  //   case 'h4':
  //     return (
  //       <Tag className={styles.h4} {...props}>
  //         {children}
  //       </Tag>
  //     );
  //   case 'h5':
  //     return (
  //       <Tag className={styles.h5} {...props}>
  //         {children}
  //       </Tag>
  //     );

  //   default:
  //     <></>;
  // }

  return (
    <Tag className={cn(styles[tag], className)} {...props}>
      {children}
    </Tag>
  );
};
