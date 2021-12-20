import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import bgPicDesktop from '../../public/assets/destination/background-destination-desktop.jpg';
import bgPicMobile from '../../public/assets/destination/background-destination-mobile.jpg';
import bgPicTablet from '../../public/assets/destination/background-destination-tablet.jpg';
import { BackgroundPageImage, Heading, Tabs } from '../components';
import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';
import { Destination, IData, PageSeo } from '../interface/data.interface';
import { LayoutPage, Meta } from '../layout';
import { getServerData } from '../utils/getServerData';

const DestinationPage: NextPage<DestinationPageProps> = ({
  destination,
  seo,
}) => {
  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
      <LayoutPage>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>01</span>Pick your destination
        </Heading>

        {destination && <Tabs data={destination} className='grid' />}
      </LayoutPage>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
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
  const seo: PageSeo = data.seo.destination ?? {};

  return {
    props: { destination, seo },
  };
};

interface DestinationPageProps extends Record<string, unknown> {
  destination: Destination[] | null;
  seo: PageSeo;
}
