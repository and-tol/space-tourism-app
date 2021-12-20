import Head from 'next/head';
import React from 'react';
import { MetaProps } from './Meta.props';

export const Meta = ({ title, description, keywords }: MetaProps): JSX.Element => {
  return (
    <Head>
      <meta charSet='utf-8' key='charset' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
        key='viewport'
      />
      <title>Space Tourism | {title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.svg' />

      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Home',
  description: 'All about space tourism',
  keywords: 'space, tourism',
};
