import React from 'react';
import cn from 'classnames';
import { Header } from '.';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

export const Layout = ({ children, className }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.mainContainer, className)}>
      <Header />
      {children}
    </div>
  );
};
