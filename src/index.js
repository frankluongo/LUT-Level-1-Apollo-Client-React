import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  isEditMode: false
}

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: 'https://api-useast.graphcms.com/v1/cjodhanpb78xp01dg0edo0qkt/master',
    clientState: {
      defaults: defaultState,
      resolvers: {}
    }
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
serviceWorker.unregister();
});
