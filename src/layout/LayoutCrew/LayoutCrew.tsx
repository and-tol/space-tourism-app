import React from 'react';
import { Layout } from '..';
import { LayoutCrewProps } from './LayoutCrew.props';

export const LayoutCrew = ({ children }: LayoutCrewProps): JSX.Element => {
  return (
    <Layout className='height100vh pb0'>
      <main className={'wrapper pageMain height100vh'}>
        {children}
      </main>
    </Layout>
  );
};
