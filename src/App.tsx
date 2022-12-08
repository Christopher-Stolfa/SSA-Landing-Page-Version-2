import React from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import { Card } from './components/Cards';
import { CreativeSpaces, HeroCarousel, Jedi } from './sections';

/**
 * This is the root React component.
 *
 * @component
 */
const App = () => {
  return (
    <div className={styles['root']}>
      <HeroCarousel />
      <Jedi />
      <CreativeSpaces />

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="tertiary">tertiary</Button>
      <Card
        date="9/9/1999"
        title="It's a Card!"
        body="In this string is a body of text."
        personName="John Doe"
        label="Professuh"
      />
      <IconButton href="facebook.com" variant="facebook" />
    </div>
  );
};

export default App;
