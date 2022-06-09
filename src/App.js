import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { fact: '' };
  }

  fetchFact = () => {
    fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
      .then((res) => res.json())
      .then((data) => this.setState({ fact: data.text }));
  };

  componentDidMount() {
    this.fetchFact();
  }

  render() {
    return (
      <header className='masthead d-flex align-items-center'>
        <div className='container px-lg-5 text-center'>
          <h1 className='mb-5 text-shadow'>{this.state.fact}</h1>

          <button className='btn btn-primary btn-xl' onClick={this.fetchFact}>
            Find Out More
          </button>
        </div>
      </header>
    );
  }
}

export { App };
