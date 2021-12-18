import React from 'react';
import { Layout } from '..';
import { LayoutHomeProps } from './LayoutHome.props';
import { BackgroundPageImage } from '../../components';
import { bgPicUrlsCreator } from '../../helpers/bgPicUrlsCreator';

import bgPicDesktop from '../../../public/assets/home/background-home-desktop.jpg';
import bgPicTablet from '../../../public/assets/home/background-home-tablet.jpg';
import bgPicMobile from '../../../public/assets/home/background-home-mobile.jpg';

import styles from './LayoutHome.module.css'

export const LayoutHome = ({ children }: LayoutHomeProps): JSX.Element => {
  return (
    <Layout>
      <main className={styles.main}>{children}</main>
      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </Layout>
  );
};
