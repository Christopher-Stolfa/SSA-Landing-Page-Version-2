import React from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import { Card } from './components/Cards';
import { Hero } from './components/Hero';
import Tabs from './components/Tabs/Tabs';
import { Tab, TabList, TabPanel, TabPanels } from './components/Tabs';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => (
  <div className={styles['root']}>
    <div>
      <Hero />
    </div>
    <div>
      <Tabs>
        <TabList>
          <Tab id={0}>One apple</Tab>
          <Tab id={1}>Two apple</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id={0}>Tab Panel: Apple One</TabPanel>
          <TabPanel id={1}>Tab Panel: Apple Two</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs>
        <TabList>
          <Tab id={0}>One banana</Tab>
          <Tab id={1}>Two banana</Tab>
          <Tab id={2}>Two banana</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id={0}>Tab Panel: banana One</TabPanel>
          <TabPanel id={1}>Tab Panel: banana Two</TabPanel>
          <TabPanel id={2}>Tab Panel: banana Three</TabPanel>
        </TabPanels>
      </Tabs>
    </div>

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

export default App;
