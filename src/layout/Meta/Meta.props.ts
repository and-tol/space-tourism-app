import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PageSeo } from '../../interface/data.interface';

export interface MetaProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  title: PageSeo['title'];
  description: PageSeo['description'];
  keywords: PageSeo['keywords'];
}
