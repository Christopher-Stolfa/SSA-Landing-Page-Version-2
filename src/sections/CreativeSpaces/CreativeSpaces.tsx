import React from 'react';
import styles from './CreativeSpaces.module.scss';
import { Tab, TabArrows, TabList, TabPanel, TabPanels } from '../../components/Tabs';
import Tabs from '../../components/Tabs/Tabs';
import { Container } from '../../components/Container';
import { Header } from '../../components/Headers';
import { uniqueId } from 'lodash';
import Img from 'react-cool-img';
import { placeholderImg } from '../../assets';
import { regexStripHtml } from '../../utils';
import { useQuery } from '@apollo/client';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import CreativeSpacesInfo from './CreativeSpacesInfo';
import { Button } from '../../components/Buttons';
import { ReadMore } from '../../components/ReadMore';

/**
 * Creative Spaces section with tablist content
 * @component
 */
const CreativeSpaces = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  return (
    <Container>
      <div className={styles['container']}>
        <Header as="h2">CREATIVE SPACES</Header>
        <Tabs className={styles['tabs-container']}>
          <div className={styles['tabs-flex']}>
            <TabList className={styles['tablist']}>
              {data?.page?.landingPage?.creativeSpaces?.map(({ title }, i) => (
                <Tab key={uniqueId(title)} id={i}>
                  {title}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {data?.page?.landingPage?.creativeSpaces?.map(
                ({ title, description, image, moreInfoUrl }, i) => (
                  <TabPanel key={uniqueId(title)} id={i}>
                    <span className={styles['small-screen-header']}>
                      <Header as="h4">{title}</Header>
                      <TabArrows size={data?.page?.landingPage?.creativeSpaces?.length || 0} />
                    </span>
                    <Img
                      lazy
                      cache
                      src={image?.link}
                      placeholder={placeholderImg}
                      alt={image?.altText}
                      sizes="(max-width: 648px) 100vw, 648px"
                      width="100%"
                      height="auto"
                    />
                    <div className={styles['content']}>
                      <span className={styles['large-screen-header']}>
                        <Header as="h4">{title}</Header>
                      </span>
                      <div className={styles['description']}>
                        <ReadMore>{regexStripHtml(description)}</ReadMore>
                      </div>
                      {moreInfoUrl && (
                        <Button href={moreInfoUrl} className={styles['btn']}>
                          More Info
                        </Button>
                      )}
                    </div>
                  </TabPanel>
                ),
              )}
            </TabPanels>
          </div>
          <CreativeSpacesInfo />
        </Tabs>
      </div>
    </Container>
  );
};

export default CreativeSpaces;
