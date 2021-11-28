import React from 'react';
import Image from 'next/image';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import bgPic from '../../public/assets/home/background-home-desktop.jpg';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      {children}

      <Image
        src={bgPic}
        placeholder='blur'
        className={styles.pic}
        alt=''
        layout='fill'
      />
    </div>
  );
};
