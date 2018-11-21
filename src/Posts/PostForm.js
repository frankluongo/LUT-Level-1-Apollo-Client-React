import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    post: {}
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || '',
  }

  handleInput = event => {
    const formData = {};
    formData[event.target.name] = event.target.value;
    this.setState({...formData});
  }

  render() {
    const { onSubmit } = this.props;
    const { title, body, id } = this.state;
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          variables: {
            title,
            body,
            id
          }
        }).then(() => {
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
    )
  }
}
