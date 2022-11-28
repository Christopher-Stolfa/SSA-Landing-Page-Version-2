import React, { useContext } from 'react';
import Img from 'react-cool-img';
import styles from './TabArrows.module.scss';
import { arrowLeft, arrowRight } from '../../../assets/svgs';
import { TabsContext } from '../../../contexts/TabsContext';

interface ITabArrowsProps {
  size: number;
}

const TabArrows = ({ size }: ITabArrowsProps) => {
  const { setTab } = useContext(TabsContext);

  const onClickPrev = () => {
    setTab((prev) => {
      if (prev - 1 < 0) {
        return size - 1;
      }
      return prev - 1;
    });
  };
  const onClickNext = () => {
    setTab((prev) => {
      if (prev + 1 === size) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className={styles['root']}>
      <button className={styles['btn']} onClick={onClickPrev}>
        <Img src={arrowLeft} alt="Previous tab" />
      </button>
      <button className={styles['btn']} onClick={onClickNext}>
        <Img src={arrowRight} alt="Next tab" />
      </button>
    </div>
  );
};

export default TabArrows;
