import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import styles from './index.module.scss';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new RetryLink({
      attempts: (count, operation, error) => {
        return !!error && operation.operationName != 'specialCase';
      },
      delay: (count, operation, error) => {
        return count * 1000 * Math.random();
      },
    }),
    new HttpLink({ uri: process.env.GRAPHQL_URI }),
  ]),
  credentials: 'same-origin',
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className={styles['root']}>
        <App />
      </div>
    </ApolloProvider>
  </React.StrictMode>,
);
