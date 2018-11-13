import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjodhanpb78xp01dg0edo0qkt/master'
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

client.query({
  query: testQuery
}).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>
            Hey, demons, it's me, ya boy.
          </p>
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
