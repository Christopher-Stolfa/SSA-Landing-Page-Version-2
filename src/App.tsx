import React from 'react';
import { createRoot } from 'react-dom/client';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => (
  <React.StrictMode>
    <header>The Header</header>
    <main>
      <h1>Hello world</h1>
      <p>Have a wonderful day</p>
    </main>
    <footer>The Footer</footer>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
