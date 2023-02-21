import { useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { NewsCard } from '../../components/Cards/';
import { Header } from '../../components/Headers';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import { formatDate, makeNumArray } from '../../utils';
import { Button } from '../../components/Buttons';
import styles from './NewsAndEvents.module.scss';

const NewsAndEvents = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  const skeletonData = makeNumArray(3).map((a, i) => ({
    loading,
    title: `Loading...${i}`,
    content: 'Hi friend! I am the loading skeleton :)',
  }));
  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <div className={styles['news']}>
          <div>
            <Header as="h2">FEATURED NEWS</Header>
            <div className={styles['news-cards']}>
              {(loading || error) &&
                skeletonData.map((dummyData) => <NewsCard {...dummyData} key={dummyData?.title} />)}
              {data?.page?.landingPage?.featuredPostGroup?.map((post, i) => (
                <NewsCard
                  key={`feat-post-${post?.post?.link}`}
                  title={post?.post?.title}
                  date={post?.post?.date}
                  content={post?.post?.content}
                  href={post?.post?.link}
                  src={post?.image?.link}
                  alt={post?.image?.altText}
                  loading={loading}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles['events']}>
          <Header as="h2">UPCOMING EVENTS</Header>
          <ul className={styles['events-list']}>
            {data?.events?.edges
              ?.filter((event) => {
                const today = moment();
                const eventDate = moment(event.node.eventEndDate);
                return today.startOf('day') <= eventDate.endOf('day');
              })
              ?.reverse()
              ?.slice(0, 5)
              ?.map((event) => (
                <li
                  className={styles['event-list-item']}
                  key={`event?.node?.title${event?.node?.link}`}>
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
            <Button href={data?.page?.landingPage?.buttonUrls?.events} className={styles['btn']}>
              ALL SSA EVENTS
            </Button>
            <Button href={data?.page?.landingPage?.buttonUrls?.calendar} className={styles['btn']}>
              CCNY CALENDAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
