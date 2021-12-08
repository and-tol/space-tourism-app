import cn from 'classnames';
import { Heading, P } from '../..';
import styles from './TabContent.module.css';
import { TabContentProps } from './TabContent.props';

export const TabContent = ({
  context,
  className,
  ...props
}: TabContentProps): JSX.Element => {
  return (
    <div className={cn(styles.tabDescription, className)} {...props}>
      <Heading tag='h4' className={styles.role}>
        {context.role}
      </Heading>
      <Heading tag='h3' className={styles.name}>
        {context.name}
      </Heading>
      <P className={styles.description}>{context.bio}</P>
    </div>
  );
};
