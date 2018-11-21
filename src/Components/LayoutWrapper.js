import React, { Component } from 'react'

export default class LayoutWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-wrapper">
        {children}
      </div>
    )
  }
}
