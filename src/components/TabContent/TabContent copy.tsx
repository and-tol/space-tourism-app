import { Heading, P } from '..';
import { TabContentProps } from './TabContent.props';
import styles from './TabContent.module.css';

export const TabContent = ({
  context,
  ...props
}: TabContentProps): JSX.Element => {
  return (
    <div className={styles.tabContent} {...props}>
      <Heading tag='h2' className={styles.name}>
        {context.name}
      </Heading>
      <P className={styles.description}>{context.description}</P>
      <hr />
      <div className={styles.factsContainer}>
        <div className={styles.fact}>
          <h6 className={styles.factTitle}>AVG. DISTANCE</h6>
          <p className={styles.fact}>{context.distance}</p>
        </div>
        <div>
          <h6 className={styles.factTitle}>Est. travel time</h6>
          <p className={styles.fact}>{context.travel}</p>
        </div>
      </div>
    </div>
  );
};
