import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LayoutWrapper from './Components/LayoutWrapper';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Link to={'/'}>
            GraphQL
          </Link>
          </header>
          <LayoutWrapper>
            <Switch>
              <Route exact path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
              <Route exact path="/" component={Posts} />
            </Switch>
          </LayoutWrapper>
        </div>
      </Router>
    );
  }
}

export default App;

