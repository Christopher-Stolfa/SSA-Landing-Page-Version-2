import React from 'react';
import styles from './NewsCard.module.scss';
import { placeholderImg } from '../../assets';
import Img from 'react-cool-img';
import moment from 'moment';
import { regexStripHtml } from '../../utils';
interface Props {
  title?: string;
  date?: Date;
  content?: string;
  src?: string;
  href?: string;
  alt?: string;
}

const defaultAlt = 'Card Image';

const NewsCard = ({ title, date, content, href, alt, src = placeholderImg }: Props) => {
  return (
    <a className={styles['root']} target="_blank" rel="noreferrer" href={href}>
      <Img
        style={{ objectFit: 'cover' }}
        lazy
        cache
        src={src}
        placeholder={placeholderImg}
        alt={alt || title || defaultAlt}
        height={176}
      />
      <div className={styles['card-body']}>
        <span className={styles['date']}>{moment(date).format('MMM D, YYYY').toString()}</span>
        <h4 className={styles['title']}>{title}</h4>
        <p className={styles['content']}>{regexStripHtml(content)}</p>
      </div>
    </a>
  );
};

export default NewsCard;
