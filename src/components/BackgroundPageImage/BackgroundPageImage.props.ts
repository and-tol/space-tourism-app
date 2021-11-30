import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BackgroundPageImageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  bgPicUrls: BgPicUrls;
  // bgPicUrls: string[] | StaticImageData[] | string | StaticImageData;
  bgPicUrl?: string | StaticImageData;
}

export enum Module {
  Mobile = 600,
  Tablet = 810,
  Desktop = 1116,
}

export type BgPicUrl = string | StaticImageData;

export interface BgPicUrls {
  desktop?: BgPicUrl;
  tablet?: BgPicUrl;
  mobile?: BgPicUrl;
}
