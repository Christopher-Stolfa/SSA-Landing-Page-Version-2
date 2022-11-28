import React from 'react';
import { Button } from '../Buttons';
import IconButton, { IIconButtonProps } from '../Buttons/IconButton';
import { uniqueId } from 'lodash';
import styles from './Hero.module.scss';

const socialMedia: IIconButtonProps[] = [
  {
    href: 'https://instagram.com/whatsonatssa/',
    variant: 'instagram',
  },
  {
    href: 'https://www.youtube.com/channel/UCd2v8X2TCyQHA2Ww2EpfTXA',
    variant: 'youtube',
  },
  {
    href: 'https://www.facebook.com/spitzerschoolofarchitecture',
    variant: 'facebook',
  },
  {
    href: 'https://www.linkedin.com/school/spitzer-school-of-architecture-city-college-of-new-york-cuny/',
    variant: 'linkedin',
  },
  {
    href: 'https://twitter.com/whatsonatssa',
    variant: 'twitter',
  },
];

const Hero = () => {
  return (
    <>
      <div className={styles['root']}>
        <div className={styles['container']}>
          <h1 className={styles['h1']}>
            <span className={styles['color-yellow']}>NEW YORK CITY&apos;S</span> FLAGSHIP PUBLIC
            SCHOOL FOR <span className={styles['color-yellow']}>ARCHITECTURE</span>
          </h1>
          <p className={styles['quote']}>
            Creating a just, sustainable, and imaginative future. Come to dream, design, and build
            at City.
          </p>
          <Button className={styles['btn']} variant="primary">
            APPLY
          </Button>
          <Button className={styles['btn']} variant="secondary">
            VIEW STUDENT WORK
          </Button>
          <div className={styles['btn-container']}>
            <Button className={styles['btn-smalltext']} variant="primary">
              UNDERGRADUATE
            </Button>
            <Button className={styles['btn-smalltext']} variant="primary">
              GRADUATE
            </Button>
          </div>
          <a className={styles['info']}>Request Information</a>
          <ul className={styles['btn-social-list']}>
            {socialMedia.map((socialProps: IIconButtonProps) => (
              <li key={uniqueId(socialProps?.variant)}>
                <IconButton {...socialProps} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
