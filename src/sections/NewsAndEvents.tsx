import { useQuery } from '@apollo/client';
import { uniqueId } from 'lodash';
import React from 'react';
import NewsCard from '../components/Cards/NewsCard';
import { Header } from '../components/Headers';
import GET_PAGE_DATA, { IPageData } from '../data/get-data';
import styles from './NewsAndEvents.module.scss';

const NewsAndEvents = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  return (
    <div className={styles['root']}>
      <div className={styles['block']}>
        <Header as="h2">FEATURED NEWS</Header>
        <div className={styles['scroll-container']}>
          {data?.page?.landingPage?.featuredPostGroup?.map((post, i) => (
            <NewsCard
              key={uniqueId(`feat-post-${i}`)}
              title={post?.post?.title}
              date={post?.post?.date}
              content={post?.post?.content}
              href={post?.post?.link}
              src={post?.image?.link}
              alt={post?.image?.altText}
            />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
