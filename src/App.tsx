import React from 'react';
import { Button, IconButton } from './components/Buttons';
import { Card } from './components/Cards';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => (
  <>
    <Button variant="primary">primary</Button>
    <Button variant="secondary">secondary</Button>
    <Card
      date="9/9/1999"
      title="It's a Card!"
      body="In this string is a body of text."
      personName="John Doe"
      label="Professuh"
    />
    <IconButton href="facebook.com" variant="facebook" />
  </>
);

export default App;
