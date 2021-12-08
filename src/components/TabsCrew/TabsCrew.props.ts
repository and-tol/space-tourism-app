import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Crew } from '../../interface/data.interface';

export interface TabsCrewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Crew[];
}
