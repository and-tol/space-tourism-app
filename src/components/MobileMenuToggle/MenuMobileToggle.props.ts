import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuMobileToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setView(locical: boolean): void;
}
