import React, { Component } from 'react';
import CounterButton from './CounterButton';

export default class Header extends Component {
  // No re-render of the component
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color="red" />
      </div>
    );
  }
};
