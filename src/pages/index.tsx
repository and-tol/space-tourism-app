import type { NextPage } from 'next';
import React from 'react';
import { Header, Hero } from '../components';
import { Layout } from '../layout';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>

      <main>
        <Hero />
      </main>

      <footer></footer>
    </Layout>
  );
};

export default Home;
