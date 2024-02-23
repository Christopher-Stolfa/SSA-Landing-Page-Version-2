import React, { CSSProperties } from 'react';
import styles from './HeroCarousel.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { placeholderImg } from '../../assets';
import { Button } from '../../components/Buttons';
import IconButton, { IIconButtonProps } from '../../components/Buttons/IconButton';
import { useQuery } from '@apollo/client';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';

const HeroCarousel = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  const socialMedia: IIconButtonProps[] = [
    {
      href: data?.page?.landingPage?.buttonUrls?.instagram ?? '',
      variant: 'instagram',
    },
    {
      href: data?.page?.landingPage?.buttonUrls?.youtube ?? '',
      variant: 'youtube',
    },
    {
      href: data?.page?.landingPage?.buttonUrls?.facebook ?? '',
      variant: 'facebook',
    },
    {
      href: data?.page?.landingPage?.buttonUrls?.linkedin ?? '',
      variant: 'linkedin',
    },
    {
      href: data?.page?.landingPage?.buttonUrls?.twitter ?? '',
      variant: 'twitter',
    },
    {
      href: data?.page?.landingPage?.buttonUrls?.subscribe ?? '',
      variant: 'mail',
    },
  ];
  return (
    <div className={styles['flex']}>
      <div className={styles['hero']}>
        <div className={styles['container']}>
          <h1 className={styles['h1-large']}>
            <span className={styles['color-yellow']}>NEW YORK CITY&apos;S</span> FLAGSHIP PUBLIC
            SCHOOL FOR <span className={styles['color-yellow']}>ARCHITECTURE</span>
          </h1>
          <p className={styles['quote']}>
            Creating a just, sustainable, and imaginative future. Come to dream, design, and build
            at City.
          </p>
          <Button
            href={data?.page?.landingPage?.buttonUrls?.apply}
            className={styles['btn']}
            variant="primary">
            APPLY
          </Button>
          <Button
            href={data?.page?.landingPage?.buttonUrls?.work}
            className={styles['btn']}
            variant="secondary">
            VIEW STUDENT WORK
          </Button>
          <div className={styles['info-sessions']}>
            <p className={styles['info-session-text']}>
              Join us for our scheduled tours and info sessions!
            </p>
            <div className={styles['btn-container']}>
              <Button
                href={data?.page?.landingPage?.buttonUrls?.undergraduate}
                className={styles['btn-smalltext']}
                variant="primary">
                UNDERGRADUATE
              </Button>
              <Button
                href={data?.page?.landingPage?.buttonUrls?.graduate}
                className={styles['btn-smalltext']}
                variant="primary">
                GRADUATE
              </Button>
            </div>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ssa.ccny.cuny.edu/request-information-from-ssa/"
            className={styles['info']}>
            Request Information
          </a>
          <ul className={styles['btn-social-list']}>
            {socialMedia?.map((socialProps: IIconButtonProps) => {
              if (socialProps?.href?.length > 0) {
                return (
                  <li key={`social-icon-${socialProps?.variant}-${socialProps?.href}`}>
                    <IconButton {...socialProps} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles['h1-small-wrap']}>
          <h1 className={styles['h1-small']}>
            <span className={styles['color-yellow']}>NEW YORK CITY&apos;S</span> FLAGSHIP PUBLIC
            SCHOOL FOR <span className={styles['color-yellow']}>ARCHITECTURE</span>
          </h1>
        </div>
        {!loading && !error && (
          <Carousel dynamicHeight={false} showArrows={true} showThumbs={false} autoPlay={false}>
            {data?.page?.landingPage?.carousel?.map((item, index) => (
              <img
                key={`carousel-${item?.link}`}
                className={styles['img']}
                loading={index === 0 ? 'eager' : 'lazy'}
                src={item?.link}
                alt={item?.altText}
                onError={(e) => (e.currentTarget.src = placeholderImg)}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;
