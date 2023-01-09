import React from 'react';
import styles from './PersonCard.module.scss';
import Img from 'react-cool-img';
import { placeholderImg } from '../../assets';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProps {
  name?: string;
  position?: string;
  testimonial?: string;
  src?: string;
  alt?: string;
  loading: boolean;
}
const PersonCard = ({ loading, name, position, testimonial, src, alt }: IProps) => {
  if (loading) {
    return (
      <div className={styles['root']}>
        <Skeleton height={291} />
        <div className={styles['content']}>
          <p className={styles['testimonial']}>
            <Skeleton count={5} />
            <Skeleton width="20%" />
          </p>
          <div className={styles['person-info']}>
            <strong>
              <Skeleton width="40%" />
            </strong>
            <Skeleton width="60%" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles['root']}>
      <Img
        style={{ objectFit: 'cover' }}
        lazy
        cache
        src={src}
        placeholder={placeholderImg}
        alt={alt || name || position}
        height={291}
      />
      <div className={styles['content']}>
        <p className={styles['testimonial']}>{testimonial}</p>
        <div className={styles['person-info']}>
          <strong>{name}</strong>
          <div>{position}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
