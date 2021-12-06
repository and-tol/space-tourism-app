import React from 'react';
import { Layout } from '..';
import { LayoutPageProps } from './LayoutPage.props';

export const LayoutPage = ({ children }: LayoutPageProps): JSX.Element => {
  return (
    <Layout>
      <main className='wrapper pageMain'>{children}</main>
    </Layout>
  );
};
