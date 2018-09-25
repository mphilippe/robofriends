import React, { Component } from 'react';

export default class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return (this.state.count !== nextState.count);
  }

  updateCount = () => {
    this.setState((state) => ({count: state.count + 1}));
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={this.updateCount}
      >
        {this.state.count} times
      </button>
    );
  }
};
