import React from 'react';

// this is a stupid simple component, just to showcase accessing props
class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img width="350" height="350" src={this.props.imgUrl} />;
  }
}

export { Photo };
