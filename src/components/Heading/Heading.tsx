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

  return (
    <Tag className={cn(styles[tag], className)} {...props}>
      {children}
    </Tag>
  );
};
