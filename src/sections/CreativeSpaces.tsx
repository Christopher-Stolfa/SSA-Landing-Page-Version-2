import React from 'react';
import styles from './CreativeSpaces.module.scss';
import indexStyles from './index.module.scss';
import { Tab, TabList, TabPanel, TabPanels } from '../components/Tabs';
import Tabs from '../components/Tabs/Tabs';
import { Container } from '../components/Container';

const CreativeSpaces = () => (
  <div className={styles['root']}>
    <Container>
      <h4 className={indexStyles['section-title']}>CREATIVE SPACES</h4>
      <Tabs className={styles['tabs-container']}>
        <TabList>
          <Tab id={0}>One banana</Tab>
          <Tab id={1}>Two banana</Tab>
          <Tab id={2}>Three banana</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id={0}>Tab Panel: banana One</TabPanel>
          <TabPanel id={1}>Tab Panel: banana Two</TabPanel>
          <TabPanel id={2}>Tab Panel: banana Three</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  </div>
);

export default CreativeSpaces;
