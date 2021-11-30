import React from 'react';
import { Layout } from '..';
import { LayoutHomeProps } from './LayoutHome.props';
import { BackgroundPageImage } from '../../components';

import bgPicDesktop from '../../../public/assets/home/background-home-desktop.jpg';
import bgPicTablet from '../../../public/assets/home/background-home-tablet.jpg';
import bgPicMobile from '../../../public/assets/home/background-home-mobile.jpg';

export const LayoutHome = ({ children }: LayoutHomeProps): JSX.Element => {
  return (
    <Layout>
      <main>{children}</main>
      <BackgroundPageImage
        bgPicUrls={{ desktop: bgPicDesktop, tablet: bgPicTablet, mobile:bgPicMobile }}
      />
    </Layout>
  );
};
