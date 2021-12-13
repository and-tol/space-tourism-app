import type { NextPage } from 'next';
import React from 'react';
import { Hero } from '../components';
import { LayoutHome } from '../layout';

const HomePage: NextPage = () => {
  return (
    <LayoutHome>
        <Hero />
    </LayoutHome>
  );
};

export default HomePage;
