import Image from 'next/image';
import {
  BackgroundPageImageProps,
  Module,
  BgPicUrl,
} from './BackgroundPageImage.props';
import styles from './BackgroundPageImage.module.css';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useEffect } from 'react';

export const BackgroundPageImage = ({
  bgPicUrls,
}: // bgPicUrl,
BackgroundPageImageProps): JSX.Element => {
  const { width } = useWindowDimensions();


  let bgPicUrl: BgPicUrl = '';

  if (typeof bgPicUrls === 'string') {
    bgPicUrl = bgPicUrls;
  }

  if (width && width < Module.Mobile && bgPicUrls.mobile) {
    bgPicUrl = bgPicUrls.mobile;
  }
  if (width && width >= Module.Mobile && bgPicUrls.tablet) {
    bgPicUrl = bgPicUrls.tablet;
  }
  if (width && width >= Module.Desktop && bgPicUrls.desktop) {
    bgPicUrl = bgPicUrls.desktop;
  }


  return (
    <>
      {bgPicUrl && (
        <div className={styles.imageContainer}>
          <Image
            src={bgPicUrl}
            placeholder='blur'
            className={styles.pic}
            alt=''
            layout='fill'
          />
        </div>
      )}
    </>
  );
};
