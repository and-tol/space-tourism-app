import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import bgPicDesktop from '../../public/assets/crew/background-crew-desktop.jpg';
import bgPicMobile from '../../public/assets/crew/background-crew-mobile.jpg';
import bgPicTablet from '../../public/assets/crew/background-crew-tablet.jpg';
import { BackgroundPageImage, Heading, SliderCrew } from '../components';
import { bgPicUrlsCreator } from '../helpers/bgPicUrlsCreator';
import { Crew, IData, PageSeo } from '../interface/data.interface';
import { LayoutCrew, Meta } from '../layout';
import { getServerData } from '../utils/getServerData';

const CrewPage: NextPage<CrewPageProps> = ({ crew, seo }) => {
  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
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
  const seo: PageSeo = data.seo.crew ?? {};

  return {
    props: { crew, seo },
  };
};

interface CrewPageProps extends Record<string, unknown> {
  crew: Crew[] | null;
  seo: PageSeo;
}
