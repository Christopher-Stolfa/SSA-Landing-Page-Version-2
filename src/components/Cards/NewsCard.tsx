import React, { useMemo } from 'react';
import styles from './NewsCard.module.scss';
import { placeholderImg } from '../../assets';
import Img from 'react-cool-img';
import moment from 'moment';
import { regexStripHtml } from '../../utils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  title: string;
  date?: Date;
  content: string;
  src?: string;
  href?: string;
  alt?: string;
  loading: boolean;
}

const defaultAlt = 'Card Image';

const NewsCard = ({
  loading = false,
  title,
  date,
  content,
  href,
  alt,
  src = placeholderImg,
}: Props) => {
  const minChars = 145 - title.length;
  const isTruncated = content?.length > minChars;
  const contentRegex = useMemo(() => {
    return regexStripHtml(content);
  }, [content]);

  if (loading) {
    return (
      <div className={styles['root']}>
        <Skeleton height={176} />
        <div className={styles['card-body']}>
          <span className={styles['date']}>
            <Skeleton width="30%" />
          </span>
          <h4 className={styles['title']}>
            <Skeleton />
            <Skeleton width="60%" />
          </h4>
          <p className={styles['content']}>
            <Skeleton count={4} />
          </p>
        </div>
      </div>
    );
  }
  return (
    <a className={styles['root']} target="_blank" rel="noreferrer" href={href}>
      <Img
        style={{ objectFit: 'fill', height: '184px' }}
        lazy
        cache
        src={src}
        placeholder={placeholderImg}
        alt={alt || title || defaultAlt}
        // height={176}
      />
      <div className={styles['card-body']}>
        <span className={styles['date']}>{moment(date).format('MMM D, YYYY').toString()}</span>
        <h4 className={styles['title']}>{title}</h4>
        <p className={styles['content']}>
          {isTruncated ? `${contentRegex?.slice(0, minChars)}...` : contentRegex}
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
