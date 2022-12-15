import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './HeroCarousel.module.scss';
import { Carousel } from 'react-responsive-carousel';
import { uniqueId } from 'lodash';
import Img from 'react-cool-img';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { placeholderImg } from '../assets';
import { Button } from '../components/Buttons';
import IconButton, { IIconButtonProps } from '../components/Buttons/IconButton';
import { useQuery } from '@apollo/client';
import GET_PAGE_DATA, { IPageData } from '../data/get-data';

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
  {
    href: 'https://cuny.us4.list-manage.com/subscribe?u=21d6a2d10f897e4acb0de0db3&id=6281843555',
    variant: 'mail',
  },
];

const heroPadding = 39;

const HeroCarousel = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  const [height, setHeight] = useState(390);

  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref?.current && containerRef?.current) {
      if (containerRef.current.clientWidth > 768) {
        setHeight(ref.current.clientHeight + heroPadding);
      }
      if (containerRef.current.clientWidth < 768) {
        setHeight(390);
      }
    }
  }, [ref.current, containerRef.current]);

  return (
    <div ref={containerRef} className={styles['flex']}>
      <div ref={ref} className={styles['hero']}>
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ssa.ccny.cuny.edu/request-information-from-ssa/"
            className={styles['info']}>
            Request Information
          </a>
          <ul className={styles['btn-social-list']}>
            {socialMedia.map((socialProps: IIconButtonProps) => (
              <li key={uniqueId(socialProps?.variant)}>
                <IconButton {...socialProps} />
              </li>
            ))}
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
        <Carousel dynamicHeight={false} showArrows={true} showThumbs={false}>
          {data?.page?.landingPage?.carousel?.map((item) => (
            <div key={uniqueId(item?.link)} style={{ height: `${height}px` }}>
              <img
                className={styles['img']}
                loading="lazy"
                src={item?.link}
                placeholder={placeholderImg}
                alt={item?.altText}
                sizes="(max-width: 1280px) 100vw, 1280px"
                width="100%"
                height="100%"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
