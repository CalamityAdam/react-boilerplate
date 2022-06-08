import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>hello, {this.props.name}</h1>;
  }
}

export { Greeting };
