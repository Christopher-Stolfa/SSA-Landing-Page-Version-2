import React, { ReactNode } from 'react';
import styles from './CardCarousel.module.scss';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface IProps {
  children: ReactNode[];
}

const CardCarousel = ({ children = [] }: IProps) => {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 880 },
      items: 3,
      partialVisibilityGutter: 5,
    },
    tablet: {
      breakpoint: { max: 880, min: 656 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobileLarge: {
      breakpoint: { max: 656, min: 576 },
      items: 2,
    },
    mobileSmall: {
      breakpoint: { max: 576, min: 560 },
      items: 1,
      partialVisibilityGutter: 250,
    },
    mobileXsmall: {
      breakpoint: { max: 560, min: 464 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobile2Xsmall: {
      breakpoint: { max: 464, min: 408 },
      items: 1,
      partialVisibilityGutter: 100,
    },
    mobile3Xsmall: {
      breakpoint: { max: 408, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      key="ssa-card-carousel-key"
      containerClass={styles['container']}
      itemClass={styles['item']}
      dotListClass={styles['dot-list']}
      responsive={responsive}
      arrows={true}
      swipeable={true}
      showDots={true}
      partialVisible={true}>
      {children}
    </Carousel>
  );
};

export default CardCarousel;
