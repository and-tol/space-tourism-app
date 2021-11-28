import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuMobileToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isView: boolean;
  setIsView(): void;
}
