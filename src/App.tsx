import React from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import { CreativeSpaces, HeroCarousel, Jedi } from './sections';
import NewsAndEvents from './sections/NewsAndEvents';
import Programs from './sections/Programs';

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
      <CreativeSpaces />
    </div>
  );
};

export default App;
