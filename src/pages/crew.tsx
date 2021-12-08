import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LayoutPage } from '../layout';

import bgPicDesktop from '../../public/assets/crew/background-crew-desktop.jpg';
import bgPicTablet from '../../public/assets/crew/background-crew-tablet.jpg';
import bgPicMobile from '../../public/assets/crew/background-crew-mobile.jpg';

import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import { BackgroundPageImage, Heading, Tabs } from '../components';

import { getServerData } from '../utils/getServerData';
import { Crew, IData } from '../interface/data.interface';
import { TabsCrew } from '../components/TabsCrew/TabsCrew';

const CrewPage: NextPage<CrewPageProps> = ({ crew }) => {
  return (
    <>
      <LayoutPage>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>02</span>Meet your crew
        </Heading>

        {crew && <TabsCrew data={crew} className='grid' />}
      </LayoutPage>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </>
  );
};

CrewPage.displayName = 'DestinationPage';
export default CrewPage;

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await getServerData('data', 'data.json');

  if (!data) {
    return {
      notFound: true,
    };
  }

  const crew: Crew[] = data.crew;

  return {
    props: { crew },
  };
};

interface CrewPageProps extends Record<string, unknown> {
  destination: Crew[] | null;
}
