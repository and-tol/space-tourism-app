import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LayoutPage } from '../layout';

import bgPicDesktop from '../../public/assets/destination/background-destination-desktop.jpg';

import bgPicTablet from '../../public/assets/destination/background-destination-tablet.jpg';
import bgPicMobile from '../../public/assets/destination/background-destination-mobile.jpg';
import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import { BackgroundPageImage, Heading, Tabs } from '../components';

import { getServerData } from '../utils/getServerData';
import { Destination, IData } from '../interface/data.interface';

const DestinationPage: NextPage<DestinationPageProps> = ({ destination }) => {
  return (
    <>
      <LayoutPage>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>01</span>Pick your destination
        </Heading>

        {destination && <Tabs data={destination} className='grid' />}
      </LayoutPage>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(
          bgPicDesktop,
          bgPicTablet,
          bgPicMobile)
        }
      />
    </>
  );
};

DestinationPage.displayName = 'DestinationPage';
export default DestinationPage;

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await getServerData('data', 'data.json');

  if (!data) {
    return {
      notFound: true,
    };
  }

  const destination: Destination[] = data.destination;

  return {
    props: { destination },
  };
};

interface DestinationPageProps extends Record<string, unknown> {
  destination: Destination[] | null;
}
