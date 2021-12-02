import type { NextPage } from 'next';
import React from 'react';
import cn from 'classnames';
import { LayoutPage } from '../layout';

import styles from '../styles/Destination.module.css';

import bgPicDesktop from '../../public/assets/destination/background-destination-desktop.jpg';

import bgPicTablet from '../../public/assets/destination/background-destination-tablet.jpg';
import bgPicMobile from '../../public/assets/destination/background-destination-mobile.jpg';

import { BackgroundPageImage, Heading } from '../components';
import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

const DestinationPage: NextPage = () => {


  return (
    <>
      <LayoutPage>
        <Heading tag='h5'>
          <span className='pageNum'>01</span>Pick your destination
        </Heading>

        <div className={cn('grid', styles.gridDestination)}>
          <div className={styles.pic}>picture</div>
          <div className={styles.nav}>nav</div>
          <div className={styles.description}>description</div>
        </div>
      </LayoutPage>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </>
  );
};

export default DestinationPage;
