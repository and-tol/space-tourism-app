import type { NextPage } from 'next';
import React from 'react';
import { Header, Hero } from '../components';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      {/* <main > */}
      <Hero />

      {/* </main> */}

      <footer></footer>
    </>
  );
};

export default Home;
