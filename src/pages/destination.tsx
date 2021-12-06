import type { NextPage } from 'next';
import React, { useState } from 'react';
// import cn from 'classnames';
import { LayoutPage } from '../layout';

// import styles from '../styles/Destination.module.css';

import bgPicDesktop from '../../public/assets/destination/background-destination-desktop.jpg';

import bgPicTablet from '../../public/assets/destination/background-destination-tablet.jpg';
import bgPicMobile from '../../public/assets/destination/background-destination-mobile.jpg';
import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import {
  BackgroundPageImage,
  Heading,
  // TabDescription,
  Tabs,
  // TabsNav,
} from '../components';

import data from '../../data/data.json';
import { DataItem, Idx } from '../interface/data.interface';
// import { DataItem, Idx } from '../interface/data.interface';

const DestinationPage: NextPage = () => {
  return (
    <>
      <LayoutPage>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>01</span>Pick your destination
        </Heading>

        {data.destination && <Tabs data={data.destination} className='grid' />}
      </LayoutPage>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </>
  );
};

DestinationPage.displayName = 'DestinationPage';
export default DestinationPage;
