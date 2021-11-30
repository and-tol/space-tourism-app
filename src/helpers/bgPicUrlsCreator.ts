import {
  BgPicUrl,
  BgPicUrls,
} from '../components/BackgroundPageImage/BackgroundPageImage.props';

export const bgPicUrlsCreator = (
  desktop: BgPicUrl,
  tablet: BgPicUrl,
  mobile: BgPicUrl
): BgPicUrls => {
  return {
    desktop,
    tablet,
    mobile,
  };
};
