import React, { useState } from 'react';
import styles from './VideoPlayer.module.scss';
import { useQuery } from '@apollo/client';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import { useResizeObserver } from '@mantine/hooks';
import Img from 'react-cool-img';
import { digitourThumbnail } from '../../assets';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  const [ref, rect] = useResizeObserver();
  const [toggle, setToggle] = useState(false);
  const containerWidth = rect?.width;
  return (
    <div ref={ref} className={styles['container']}>
      <h2 className={styles['heading']}>TAKE A TOUR</h2>
      <div className={styles.container}>
        {toggle ? (
          <ReactPlayer
            width={containerWidth < 640 ? containerWidth : 640}
            url={data?.page?.landingPage?.videos?.map((item) => item?.video)}
            playing={false}
            controls
            volume={1}
            muted={true}
          />
        ) : (
          <div className={styles.cover}>
            <Img
              style={{
                position: 'relative',
                width: containerWidth < 640 ? containerWidth : 640,
                backgroundSize: 'cover',
                backgroundColor: '#000',
                objectFit: 'cover',
              }}
              alt="spitzer school of architecture digital tour video cover"
              src={digitourThumbnail}
            />
            <button
              aria-label="play digital tour video"
              className={styles.playButton}
              onClick={() => setToggle(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
