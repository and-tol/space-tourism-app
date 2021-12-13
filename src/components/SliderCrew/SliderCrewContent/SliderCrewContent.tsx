import cn from 'classnames';
import { Heading, P } from '../..';
import { SliderCrewContentProps } from './SliderCrewContent.props';
import styles from './SliderCrewContent.module.css';
import { ForwardedRef, forwardRef } from 'react';

// export const SliderCrewContent = forwardRef(
export const SliderCrewContent = forwardRef(
  (
    { context, className, handlers,...props }: SliderCrewContentProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {

    return (
      <div
        // ref={ref}
        className={cn(styles.tabDescription, className)}
        {...props}
        {...handlers}
      >
        <Heading tag='h4' className={styles.role}>
          {context.role}
        </Heading>
        <Heading tag='h3' className={styles.name}>
          {context.name}
        </Heading>
        <P className={styles.description}>{context.bio}</P>
      </div>
    );
  }
);

SliderCrewContent.displayName = 'SliderCrewContent';
