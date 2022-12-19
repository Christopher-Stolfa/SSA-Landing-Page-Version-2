import { useQuery } from '@apollo/client';
import React from 'react';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import styles from './Jedi.module.scss';

const Jedi = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  return (
    <div className={styles['root']}>
      <div className={styles['flex']}>
        <div className={styles['jedi-text-block']}>
          <strong>J</strong>USTICE
          <br />
          <strong>E</strong>QUITY
          <br />
          <strong>D</strong>IVERSITY
          <br />
          <strong>I</strong>NCLUSION
        </div>
        <div className={styles['content']}>
          <div className={styles['statement-block']}>
            The Spitzer School is deeply committed to furthering justice, equity, diversity,
            inclusion, and anti-racism within the academy and the design professions. As one of the
            most diverse schools of architecture in the country, SSA works hard to be a hub of
            innovation that advances racial and gender justice, supports new and emerging voices,
            and welcomes promising practitioners and academics from historically under-represented
            groups.
          </div>
          <div className={styles['btn-group']}>
            <a
              className={styles['jedi-button']}
              target="_blank"
              rel="noreferrer"
              href={data?.page?.landingPage?.buttonUrls?.statement}>
              RACIAL EQUITY STATEMENT
            </a>
            <a
              className={styles['jedi-button']}
              target="_blank"
              rel="noreferrer"
              href={data?.page?.landingPage?.buttonUrls?.jedi}>
              JEDI INITIATIVES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jedi;
