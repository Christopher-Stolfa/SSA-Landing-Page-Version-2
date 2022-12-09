import React from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import { CreativeSpaces, HeroCarousel, Jedi } from './sections';
import NewsAndEvents from './sections/NewsAndEvents';

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
      <CreativeSpaces />

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="tertiary">tertiary</Button>
      <IconButton href="facebook.com" variant="facebook" />
    </div>
  );
};

export default App;
