import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { Button } from './components/Buttons';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Condensed:400,700"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <React.StrictMode>
      <header>The Header</header>
      <main>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="tertiary">tertiary</Button>
      </main>

      <footer>The Footer</footer>
    </React.StrictMode>
  </>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
