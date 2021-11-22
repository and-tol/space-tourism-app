import Image from 'next/image';
import cn from 'classnames';
import bgPic from '../../../public/assets/home/background-home-desktop.jpg';
import { Heading } from '../Heading/Heading';
import styles from './Hero.module.css';

export const Hero = (): JSX.Element => {
  return (
    <>
      <div className={cn('wrapper', styles.hero)}>
        <div className={styles.content}>
          <section className={styles.text}>
            <Heading tag='h5'>So, you want to travel to</Heading>
            <Heading tag='h1' className={styles.title}>
              Space
            </Heading>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <button className={styles.button}>explore</button>
        </div>
        <Image
          src={bgPic}
          placeholder='blur'
          className={styles.pic}
          alt=''
          layout='fill'
        />
      </div>
    </>
  );
};
