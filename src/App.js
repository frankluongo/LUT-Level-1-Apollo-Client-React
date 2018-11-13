import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from "react-apollo";
import gql from 'graphql-tag';
import './App.css';

// Connecting to GraphQL API
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjodhanpb78xp01dg0edo0qkt/master'
});

// Running Our Query
const POSTS_QUERY = gql`
  query allPosts {
    postz {
      id
      title
      body
    }
  }
`;

// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Query query={POSTS_QUERY}>
            {({ data, loading}) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => <h1 key={post.id} >{post.title}</h1>);
            }}
          </Query>
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
