import React, { ReactNode } from 'react';
import styles from './CardCarousel.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface IProps {
  children: ReactNode;
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const CardCarousel = ({ children = [] }: IProps) => {
  return (
    <Carousel
      containerClass={styles['container']}
      itemClass={styles['item']}
      dotListClass={styles['dot-list']}
      arrows={true}
      swipeable={true}
      showDots={true}
      responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default CardCarousel;
