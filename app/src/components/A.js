import React, { Component } from 'react'

export default class A extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    let {match} = this.props.match;
    return (
      <div>
          A页
      </div>
    )
  }
}
