import React, { useState } from 'react';
import styles from './ReadMore.module.scss';

interface IProps {
  children: string;
}

const ReadMore = ({ children }: IProps) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const minChars = 350;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={styles['text']}>
      {isReadMore ? text?.slice(0, minChars) : text}
      {children?.length > minChars && (
        <span>
          {isReadMore && '...'}
          <span onClick={toggleReadMore} className={styles['read-or-hide']}>
            {isReadMore ? ' read more' : ' show less'}
          </span>
        </span>
      )}
    </p>
  );
};

export default ReadMore;
