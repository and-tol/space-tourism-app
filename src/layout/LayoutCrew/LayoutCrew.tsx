import React from 'react';
import cn from 'classnames';
import { Layout } from '..';
import { LayoutCrewProps } from './LayoutCrew.props';
import styles from './LayoutCrew.module.css';

export const LayoutCrew = ({ children }: LayoutCrewProps): JSX.Element => {
  return (
    <Layout className='height100vh'>
      <main className={cn('wrapper pageMain', styles.layoutCrew)}>
        {children}
      </main>
    </Layout>
  );
};
