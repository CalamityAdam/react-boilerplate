import React, { Component } from 'react';
import { Heading } from './components';
import { calculateTipAmount, calculateTotal } from './helpers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tipPercent: 0.2,
      price: 0,
    };
  }

  render() {
    return (
      <div className='container l:w-50 p-5'>
        <Heading />

        <div className='container px-0'>
          <div className='row mb-4'>
            <div className='col'>
              <label htmlFor='price' className='form-label mb-1'>
                price
              </label>
              <div className='input-group'>
                <span className='input-group-text' id='basic-addon1'>
                  $
                </span>
                <input
                  className='form-control'
                  id='price'
                  onChange={(e) => this.setState({ price: +e.target.value })}
                  placeholder='Price'
                  type='number'
                />
              </div>
            </div>

            <div className='col'>
              <label htmlFor='tip-percent' className='form-label mb-1'>
                tip
              </label>
              <div className='input-group'>
                <span className='input-group-text' id='basic-addon1'>
                  %
                </span>
                <select
                  className='form-select'
                  id='tip-percent'
                  onChange={(e) =>
                    this.setState({ tipPercent: +e.target.value })
                  }
                >
                  <option value='0.2'>20</option>
                  <option value='0.18'>18</option>
                  <option value='0.15'>15</option>
                  <option value='0.1'>10</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className='row'>
            <p className='col fs-3'>
              Tip amount:{' '}
              <span data-testid="tip" className='fw-bold'>
                ${calculateTipAmount(this.state.price, this.state.tipPercent)}
              </span>
            </p>
            <p className='col fs-3'>
              Total:{' '}
              <span data-testid="total" className='fw-bold'>
                ${calculateTotal(this.state.price, this.state.tipPercent)}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { App };
