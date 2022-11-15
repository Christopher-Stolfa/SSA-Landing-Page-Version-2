import React from 'react';
import { Container } from '../Container';
import styles from './Card.module.scss';
import { placeholderImg } from '../../assets';
import { Image } from '../Image';
interface Props {
  title?: string;
  date?: string;
  body?: string;
  personName?: string;
  label?: string;
  src?: string;
}

const defaultAlt = 'Card Image';

const Card = ({
  title,
  date,
  body,
  personName,
  label,
  src = placeholderImg,
}: Props) => {
  return (
    <div className={styles['root']}>
      <Image src={src} alt={personName || title || defaultAlt} />
      <Container>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>
          <b>{personName}</b>
        </h3>
        <p>{label}</p>
      </Container>
    </div>
  );
};

export default Card;
