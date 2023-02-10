import { useQuery } from '@apollo/client';
import React from 'react';
import styles from './Programs.module.scss';
import { Header } from '../../components/Headers';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import { programsArrow } from '../../assets/svgs';

const Programs = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <Header as="h2">PROGRAMS</Header>
        <div className={styles['grid']}>
          {data?.page?.landingPage?.programs?.map((item) => (
            <a
              key={`program-button-${item?.name}-${item?.url}`}
              target="_blank"
              rel="noreferrer"
              className={styles['programs-btn']}
              href={item?.url}>
              <span className={styles['text']}>{item?.name}</span>
              <img src={programsArrow} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
