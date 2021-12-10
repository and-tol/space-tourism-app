import cn from 'classnames';
import { Heading, P } from '../..';
import { SliderCrewContentProps } from './SliderCrewContent.props';
import styles from './SliderCrewContent.module.css';

export const SliderCrewContent = ({
  context,
  className,
  ...props
}: SliderCrewContentProps): JSX.Element => {
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
