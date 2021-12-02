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
        MOON
      </Heading>
      <P className={styles.description}>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </P>
      <hr className={styles.hr} />
      <div className={styles.factsContainer}>
        <div className={styles.fact}>
          <h6 className={styles.factTitle}>AVG. DISTANCE</h6>
          <p className={styles.fact}>384,400 km</p>
        </div>
        <div>
          <h6 className={styles.factTitle}>Est. travel time</h6>
          <p className={styles.fact}>3 days</p>
        </div>
      </div>
    </div>
  );
};
