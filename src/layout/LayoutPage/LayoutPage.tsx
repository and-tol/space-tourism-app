import React from 'react';
import { Layout } from '..';
import { LayoutPageProps } from './LayoutPage.props';

import { Heading } from '../../components';

export const LayoutPage = ({
  title,
  children,
}: LayoutPageProps): JSX.Element => {

  console.log(title)

  return (
    <Layout>
      
      <main className='wrapper pageMain'>{children}</main>

    </Layout>
  );
};
