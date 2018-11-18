import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';


import './App.css';

// Connecting to GraphQL API
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjodhanpb78xp01dg0edo0qkt/master'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
          <Link to={'/'}>
            GraphQL
          </Link>
          </header>
          <Link to={'/post/new'}>New Post</Link>
          <Switch>
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
            <Route exact path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;

