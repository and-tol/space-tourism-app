import React from 'react';
import { Layout } from '..';
import { LayoutDestinationProps } from './LayoutDestination.props';

import bgPicDesktop from '../../../public/assets/destination/background-destination-desktop.jpg';
import bgPicTablet from '../../../public/assets/destination/background-destination-tablet.jpg';
import bgPicMobile from '../../../public/assets/destination/background-destination-mobile.jpg';

import { BackgroundPageImage } from '../../components';
import { bgPicUrlsCreator } from '../../helpers/bgPicUrlsCreator';

export const LayoutDestination = ({ children }: LayoutDestinationProps): JSX.Element => {
  return (
    <Layout>
      <main className='pageMain'>{children}</main>
      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </Layout>
  );
};
