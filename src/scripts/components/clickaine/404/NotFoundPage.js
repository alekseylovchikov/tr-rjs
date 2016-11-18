import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="active-page--container">
        <h1 className="active-page--title">{'404'}</h1>
      </div>
    );
  }
}
