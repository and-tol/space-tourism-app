import { Heading, P } from '../..';
import { TabDescriptionProps } from './TabDescription.props';
import styles from './TabDescription.module.css';

export const TabDescription = ({
  context,
  ...props
}: TabDescriptionProps): JSX.Element => {
  return (
    <div className={styles.tabDescription} {...props}>
      <Heading tag='h2' className={styles.name}>
        {context.name}
      </Heading>
      <P className={styles.description}>{context.description}</P>
      <hr />
      <div className={styles.factsContainer}>
        <div className={styles.fact}>
          <h6 className={styles.factTitle}>AVG. DISTANCE</h6>
          <p className={styles.factDescription}>{context.distance}</p>
        </div>
        <div>
          <h6 className={styles.factTitle}>Est. travel time</h6>
          <p className={styles.factDescription}>{context.travel}</p>
        </div>
      </div>
    </div>
  );
};
