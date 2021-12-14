import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LayoutCrew } from '../layout';

import bgPicDesktop from '../../public/assets/technology/background-technology-desktop.jpg';
import bgPicTablet from '../../public/assets/technology/background-technology-tablet.jpg';
import bgPicMobile from '../../public/assets/technology/background-technology-mobile.jpg';

import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import { BackgroundPageImage, Heading, SliderTechnology } from '../components';

import { getServerData } from '../utils/getServerData';
import { IData, Technology } from '../interface/data.interface';

const TechnologyPage: NextPage<TechnologyPageProps> = ({ technology }) => {
  return (
    <>
      <LayoutCrew>
        <Heading tag='h5' className='mainTextColor pageTitle'>
          <span className='pageNum'>03</span>SPACE LAUNCH 101
        </Heading>

        {technology && <SliderTechnology data={technology} className='grid' />}
      </LayoutCrew>

      <BackgroundPageImage
        bgPicUrls={bgPicUrlsCreator(bgPicDesktop, bgPicTablet, bgPicMobile)}
      />
    </>
  );
};

TechnologyPage.displayName = 'TechnologyPage';
export default TechnologyPage;

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await getServerData('data', 'data.json');

  if (!data) {
    return {
      notFound: true,
    };
  }

  const technology: Technology[] = data.technology;

  return {
    props: { technology },
  };
};

interface TechnologyPageProps extends Record<string, unknown> {
  crew: Technology[] | null;
}
