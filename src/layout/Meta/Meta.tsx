import Head from 'next/head';
import React from 'react';

export const Meta = () => {
  return (
    <Head>
      <meta charSet='utf-8' key='charset' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
        key='viewport'
      />
      <title>Space Tourism</title>
      <meta name='keywords' content='space, tourism' />
      <meta name='description' content='All about space tourism' />
      <link rel='icon' href='/favicon-32x32.png' />

      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
    </Head>
  );
};
