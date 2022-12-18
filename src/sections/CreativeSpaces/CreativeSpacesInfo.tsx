import React, { useContext, useMemo } from 'react';
import styles from './CreativeSpacesInfo.module.scss';
import { Button } from '../../components/Buttons';
import { TabsContext } from '../../contexts/TabsContext';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import { useQuery } from '@apollo/client';
import { uniqueId } from 'lodash';

const CreativeSpacesInfo = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  const { activeTab } = useContext(TabsContext);
  const schedule = useMemo(() => {
    const creativeSpaceData = data?.page?.landingPage?.creativeSpaces?.find(
      (_, i) => i === activeTab,
    );
    const schedule = creativeSpaceData?.schedule;
    const hasSchedule =
      schedule?.monday ||
      schedule?.tuesday ||
      schedule?.wednesday ||
      schedule?.thursday ||
      schedule?.friday ||
      schedule?.saturday ||
      schedule?.sunday;
    const scheduleItems = [
      { name: 'Monday', time: schedule?.monday || '-' },
      { name: 'Tuesday', time: schedule?.tuesday || '-' },
      { name: 'Wednesday', time: schedule?.wednesday || '-' },
      { name: 'Thursday', time: schedule?.thursday || '-' },
      { name: 'Friday', time: schedule?.friday || '-' },
      { name: 'Saturday', time: schedule?.saturday || '-' },
      { name: 'Sunday', time: schedule?.sunday || '-' },
    ];
    if (!hasSchedule) {
      return <></>;
    } else {
      return (
        <div className={styles['schedule']}>
          <div className={styles['hours-title']}>Hours</div>
          <div className={styles['week-days']}>
            {scheduleItems?.map((item) => (
              <div key={uniqueId(item?.name)} className={styles['day-time']}>
                <div>{item?.name}</div>
                <div>{item?.time}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }, [data, activeTab]);
  return (
    <div className={styles['info']}>
      {schedule}
      <p className={styles['info-sessions']}>Join us for our scheduled info sessions</p>
      <div className={styles['btn-group']}>
        <Button className={styles['btn']}>Undergraduate</Button>
        <Button className={styles['btn']}>Graduate</Button>
      </div>
    </div>
  );
};

export default CreativeSpacesInfo;
