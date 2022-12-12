import { useQuery } from '@apollo/client';
import { uniqueId } from 'lodash';
import moment from 'moment';
import React from 'react';
import NewsCard from '../components/Cards/NewsCard';
import { Header } from '../components/Headers';
import GET_PAGE_DATA, { IPageData } from '../data/get-data';
import { formatDate } from '../utils';
import { Button } from '../components/Buttons';
import styles from './NewsAndEvents.module.scss';

const NewsAndEvents = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <div className={styles['news']}>
          <Header as="h2">FEATURED NEWS</Header>
          <div className={styles['news-cards']}>
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
        </div>
        <div className={styles['events']}>
          <Header as="h2">UPCOMING EVENTS</Header>
          <ul className={styles['events-list']}>
            {data?.events?.edges
              ?.filter((event, i) => moment() <= moment(event.node.eventEndDate))
              ?.reverse()
              ?.slice(0, 5)
              ?.map((event, i) => (
                <li className={styles['event-list-item']} key={uniqueId(`event?.node?.title${i}`)}>
                  <div className={styles['event-date']}>
                    {formatDate(event?.node?.eventStartDate, event?.node?.eventEndDate)}
                  </div>
                  <a
                    className={styles['event-link']}
                    target="_blank"
                    rel="noreferrer"
                    href={event?.node?.link}>
                    <h4>{event?.node?.title}</h4>
                  </a>
                </li>
              ))}
          </ul>
          <div className={styles['btn-group']}>
            <Button className={styles['btn']}>ALL SSA EVENTS</Button>
            <Button className={styles['btn']}>CCNY CALENDAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
