import React from 'react';
import Image from 'next/image';
import { Layout } from '..';
import { LayoutHomeProps } from './LayoutHome.props';
import styles from './LayoutHome.module.css';

import bgPic from '../../../public/assets/home/background-home-desktop.jpg';

export const LayoutHome = ({ children }: LayoutHomeProps): JSX.Element => {
  return (
    <Layout>
      <main>{children}</main>
      <Image
        src={bgPic}
        placeholder='blur'
        className={styles.pic}
        alt=''
        layout='fill'
      />
    </Layout>
  );
};
