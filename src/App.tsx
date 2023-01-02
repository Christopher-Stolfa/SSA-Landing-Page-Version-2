import React from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import {
  CreativeSpaces,
  HeroCarousel,
  Jedi,
  NewsAndEvents,
  Programs,
  SpitzerOath,
  Testimonials,
  VideoPlayer,
} from './sections';

/**
 * This is the root React component.
 *
 * @component
 */
const App = () => {
  return (
    <div className={styles['root']}>
      <HeroCarousel />
      <NewsAndEvents />
      <Jedi />
      <Testimonials />
      <Programs />
      <SpitzerOath />
      <CreativeSpaces />
      <VideoPlayer />
    </div>
  );
};

export default App;
