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
          <Tab>One apple</Tab>
          <Tab>Two apple</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel: Apple One</TabPanel>
          <TabPanel>Tab Panel: Apple Two</TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel One</TabPanel>
          <TabPanel>Tab Panel Two</TabPanel>
          <TabPanel>Tab Panel Three</TabPanel>
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
