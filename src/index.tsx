import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import styles from './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
    new HttpLink({ uri: 'https://dev-spitzer-arch.pantheonsite.io/graphql' }),
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
