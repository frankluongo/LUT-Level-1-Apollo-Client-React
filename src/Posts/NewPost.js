import React, { Component } from 'react'
import PostForm from './PostForm';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';

export default class NewPost extends Component {

  state = {
    title: '',
    body: ''
  }

  handleInput = event => {
    const formData = {};
    formData[event.target.name] = event.target.value;
    this.setState({...formData});
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>New Post</h1>
        <Mutation
          mutation={NEW_POST}
          variables={{
            title,
            body
          }}
        >
        {createPost => (
          <form onSubmit={(event) => {
            event.preventDefault();
            createPost().then(() => {
              this.setState({
                title: '',
                body: ''
              })
            }).catch(error => console.log(error));
          }}>
            <input
              name="title"
              type="text"
              onChange={this.handleInput} value={title} placeholder="title"/>
            <textarea name="body" onChange={this.handleInput} value={body} id="" cols="30" rows="10" />
          <button>Submit</button>
        </form>
        )}
        </Mutation>
        {/* <PostForm /> */}
      </div>
    )
  }
}

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: {
      status: PUBLISHED
      title: $title
      body: $body
    }) {
      title
      body
      id
    }
  }
`;
