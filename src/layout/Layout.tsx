import React from 'react';
import Image from 'next/image';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import bgPic from '../../public/assets/home/background-home-desktop.jpg';
import { Header } from '.';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <Header />

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
