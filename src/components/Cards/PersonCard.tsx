import React from 'react';
import styles from './PersonCard.module.scss';
import Img from 'react-cool-img';
import { placeholderImg } from '../../assets';

interface IProps {
  name: string;
  position: string;
  testimonial: string;
  src: string;
  alt: string;
}
const PersonCard = ({ name, position, testimonial, src, alt }: IProps) => {
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
