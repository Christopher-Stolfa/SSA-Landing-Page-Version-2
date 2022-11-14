import React from 'react';
import { Container } from '../Container';
import baseStyles from './Card.scss';
import defaultImg from '../../assets/placeholder-image.png';
interface Props {
  title?: string;
  date?: string;
  body?: string;
  personName?: string;
  label?: string;
  src?: string;
}

const Card = ({ title, date, body, personName, label, src = defaultImg }: Props) => {
  return (
    <div className={baseStyles['root']}>
      <img src={src} />
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
