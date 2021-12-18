import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LayoutCrew } from '../layout';

import bgPicDesktop from '../../public/assets/crew/background-crew-desktop.jpg';
import bgPicTablet from '../../public/assets/crew/background-crew-tablet.jpg';
import bgPicMobile from '../../public/assets/crew/background-crew-mobile.jpg';

import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import { BackgroundPageImage, Heading, SliderCrew } from '../components';

import { getServerData } from '../utils/getServerData';
import { Crew, IData } from '../interface/data.interface';

const CrewPage: NextPage<CrewPageProps> = ({ crew }) => {
  return (
    <>
      <LayoutCrew>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>02</span>Meet your crew
        </Heading>

        {crew && <SliderCrew data={crew} className='grid' />}
      </LayoutCrew>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </>
  );
};

CrewPage.displayName = 'CrewPage';
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
  crew: Crew[] | null;
}
