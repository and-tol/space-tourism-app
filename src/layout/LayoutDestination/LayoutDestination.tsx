import React from 'react';
import Image from 'next/image';
import { Layout } from '..';
import { LayoutDestinationProps } from './LayoutDestination.props';
import styles from './LayoutDestination.module.css';

import bgPicDesktop from '../../../public/assets/destination/background-destination-desktop.jpg';
import bgPicTablet from '../../../public/assets/destination/background-tablet-desktop.jpg';
import bgPicMobile from '../../../public/assets/destination/background-mobile-desktop.jpg';

export const LayoutDestination = ({ children }: LayoutDestinationProps): JSX.Element => {
  return (
    <Layout>
      <main>{children}</main>
      <Image
        src={bgPicDesktop}
        placeholder='blur'
        className={styles.pic}
        alt=''
        layout='fill'
      />
    </Layout>
  );
};
