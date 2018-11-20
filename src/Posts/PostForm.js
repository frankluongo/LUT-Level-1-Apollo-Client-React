import React, { Component } from 'react'

export default class PostForm extends Component {

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
    const { onSubmit } = this.props;
    const { title, body } = this.state;
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          variables: {
            title,
            body
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
