import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { LayoutCrew, Meta } from '../layout';

import bgPicDesktop from '../../public/assets/technology/background-technology-desktop.jpg';
import bgPicTablet from '../../public/assets/technology/background-technology-tablet.jpg';
import bgPicMobile from '../../public/assets/technology/background-technology-mobile.jpg';

import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';

import { BackgroundPageImage, Heading, SliderTechnology } from '../components';

import { getServerData } from '../utils/getServerData';
import { IData, PageSeo, Technology } from '../interface/data.interface';

const TechnologyPage: NextPage<TechnologyPageProps> = ({ technology, seo }) => {
  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
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
  const seo: PageSeo = data.seo.technology ?? {};

  return {
    props: { technology, seo },
  };
};

interface TechnologyPageProps extends Record<string, unknown> {
  technology: Technology[] | null;
  seo: PageSeo;
}
