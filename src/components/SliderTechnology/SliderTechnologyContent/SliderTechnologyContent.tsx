import cn from 'classnames';
import { Heading, P } from '../..';
import { SliderTechnologyContentProps } from './SliderTechnologyContent.props';
import styles from './SliderTechnologyContent.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const SliderTechnologyContent = forwardRef(
  (
    { content, className, handlers, ...props }: SliderTechnologyContentProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.tabDescription, className)}
        {...props}
        {...handlers}
      >
        <Heading tag='h4' className={styles.title}>
          THE TERMINOLOGY…
        </Heading>
        <Heading tag='h3' className={styles.name}>
          {content.name}
        </Heading>
        <P className={styles.description}>{content.description}</P>
      </div>
    );
  }
);

SliderTechnologyContent.displayName = 'SliderTechnologyContent';
