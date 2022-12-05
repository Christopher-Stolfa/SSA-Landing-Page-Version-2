import React, { useLayoutEffect, useState } from 'react';
import styles from './App.module.scss';
import { Button, IconButton } from './components/Buttons';
import { Card } from './components/Cards';
import { CreativeSpaces, HeroCarousel } from './sections';
import GET_PAGE_DATA, { IPageData } from './data/get-data';
import { useQuery } from '@apollo/client';
import { PageDataProvider } from './contexts/PageDataContext';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => {
  const [pageData, setPageData] = useState<IPageData>({});
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);

  useLayoutEffect(() => {
    if (data) setPageData(data);
  }, [data, loading, error]);

  return (
    <PageDataProvider value={{ pageData }}>
      <div className={styles['root']}>
        <HeroCarousel />
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
    </PageDataProvider>
  );
};

export default App;
