import React from 'react';
import styles from './CreativeSpaces.module.scss';
import indexStyles from './index.module.scss';
import { Tab, TabArrows, TabList, TabPanel, TabPanels } from '../components/Tabs';
import Tabs from '../components/Tabs/Tabs';
import { Container } from '../components/Container';
import { Header } from '../components/Headers';
import { uniqueId } from 'lodash';
import Img from 'react-cool-img';
import { placeholderImg } from '../assets';
import { Button } from '../components/Buttons';
import GET_CREATIVE_SPACES, { ICreativeSpacesData } from '../data/get-creative-spaces';
import { useQuery } from '@apollo/client';
import { regexStripHtml } from '../utils';

/**
 * Creative Spaces section with tablist content
 * @component
 */
const CreativeSpaces = () => {
  const { data, loading, error } = useQuery<ICreativeSpacesData>(GET_CREATIVE_SPACES);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <div className={styles['container']}>
        <Header as="h2">CREATIVE SPACES</Header>
        <Tabs className={styles['tabs-container']}>
          <div className={styles['tabs-flex']}>
            <TabList className={styles['tablist']}>
              {data?.page?.landingPage?.creativespaces?.map(({ title }, i) => (
                <Tab key={uniqueId(title)} id={i}>
                  {title}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {data?.page?.landingPage?.creativespaces?.map(
                ({ title, link, altText, description }, i) => (
                  <TabPanel key={uniqueId(title)} id={i}>
                    <span className={styles['small-screen-header']}>
                      <Header as="h3">{title}</Header>
                      <TabArrows size={data?.page?.landingPage?.creativespaces?.length} />
                    </span>
                    <Img
                      lazy
                      cache
                      src={link}
                      placeholder={placeholderImg}
                      alt={altText}
                      sizes="(max-width: 648px) 100vw, 648px"
                      width="100%"
                      height="auto"
                    />
                    <div className={styles['content']}>
                      <span className={styles['large-screen-header']}>
                        <Header as="h3">{title}</Header>
                      </span>
                      <p>{regexStripHtml(description)}</p>
                    </div>
                  </TabPanel>
                ),
              )}
            </TabPanels>
          </div>
          <div className={styles['info']}>
            <p>Join us for our scheduled info sessions</p>
            <div className={styles['btn-group']}>
              <Button className={styles['btn']}>Undergraduate</Button>
              <Button className={styles['btn']}>Graduate</Button>
            </div>
          </div>
        </Tabs>
      </div>
    </Container>
  );
};

export default CreativeSpaces;
