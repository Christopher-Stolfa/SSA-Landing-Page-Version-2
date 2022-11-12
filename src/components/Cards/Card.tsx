import React from 'react';
import baseStyles from './Card.scss';

interface Props {
  title?: string;
  date?: string;
  body?: string;
  personName?: string;
  label?: string;
  src?: string;
}

const Card = ({ title, date, body, personName, label, src }: Props) => {
  return (
    <div className={baseStyles['root']}>
      <img src={src} />
      <div className={baseStyles['content']}>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>
          <b>{personName}</b>
        </h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Card;
