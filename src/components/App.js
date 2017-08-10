import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { normalizedCalendar } from '../selectors';

class App extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default connect(
  createStructuredSelector({
    calendar: normalizedCalendar,
  })
)(App);
