import {
  BroserWindowSizes,
  PictureOrientations,
} from '../interface/constants.types';

export const onTechnologyPicOrintation = (windowWidth: number | null): string => {
  return windowWidth! > BroserWindowSizes.Tablet_iPad
    ? PictureOrientations.Portrait
    : PictureOrientations.Landscape;
};
