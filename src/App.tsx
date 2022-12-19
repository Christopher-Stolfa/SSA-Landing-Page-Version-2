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
      <Programs />
      <SpitzerOath />
      <CreativeSpaces />
    </div>
  );
};

export default App;
