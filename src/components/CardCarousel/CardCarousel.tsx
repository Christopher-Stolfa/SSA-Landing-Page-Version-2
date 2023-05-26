import React, { ReactNode } from 'react';
import styles from './CardCarousel.module.scss';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

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
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      centerMode={false}
      containerClass={styles['container']}
      itemClass={styles['item']}
      draggable
      focusOnSelect={false}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      showDots={false}
      slidesToSlide={1}
      swipeable>
      {children}
    </Carousel>
  );
};

export default CardCarousel;
