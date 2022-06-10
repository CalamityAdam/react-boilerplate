import React from 'react';
import { Photo } from './components';

class App extends React.Component {
  constructor() {
    super();

    this.state = { quote: '' };
  }

  componentDidMount() {
    fetch('https://api.kanye.rest/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ quote: data.quote });
      });
  }

  render() {
    return (
      <div className="container p-5 d-flex flex-column align-items-center">
        <h1 className="mx-auto">{this.state.quote}</h1>

        <Photo imgUrl="https://picsum.photos/350" />
        {/* depending on time, maybe add props of `height` and `width` to Photo */}
      </div>
    );
  }
}

export { App };
