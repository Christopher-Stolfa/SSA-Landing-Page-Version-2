import React from 'react';
import { Button } from '../Buttons';
import { Container } from '../Container';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <div className={styles['root']}>
        <Container>
          <h1 className={styles['h1']}>
            <span className={styles['color-yellow']}>NEW YORK CITY&apos;S</span> FLAGSHIP PUBLIC
            SCHOOL FOR <span className={styles['color-yellow']}>ARCHITECTURE</span>
          </h1>
          <p>
            Creating a just, sustainable, and imaginative future. Come to dream, design, and build
            at City.
          </p>
          <Button className={styles['btn']} variant="primary">
            APPLY
          </Button>
          <Button className={styles['btn']} variant="secondary">
            VIEW STUDENT WORK
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Hero;
