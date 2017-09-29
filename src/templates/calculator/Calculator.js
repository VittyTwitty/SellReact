import React, {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      dataInputPayment1: 25,
      dataInputPayment2: 50
    }
  }

  handleChange1(e) {
    this.setState({
      dataInputPayment1: e.target.value
    });
    console.log(this.state.dataInputPayment1)
  }

  handleChange2(e) {
    this.setState({
      dataInputPayment2: e.target.value
    });
  }

  render() {
    let data1 = this.state.dataInputPayment1;
    let data2 = `${this.state.dataInputPayment2}`;
    let data3 = `${this.state.dataInputPayment2}.000$`;
    let maxSizeOfRange = 200;
    let percentOfRange = data2 * 100 / maxSizeOfRange;
    return (
      <div className='v-calc'>
        <div className='v-calc-left'>
          <div className='v-calc-left_top'>
            <h3>$ 3203 per month</h3>
            <div>30 Year Fixed 3.950% Interest</div>
            <hr/>
          </div>
          <div className='v-calc-left_bottom'>
            <span>
              Home Price
            </span>
            <input
              type="text"
              value={data1}
              onChange={() => {
              }}
            />
            <input
              min='0'
              max='200'
              type="range"
              value={data1}
              onChange={(e) => {
                this.handleChange1(e)
              }}
            />
          </div>
        </div>
        <div className='v-calc-right'>
          <div className='v-calc-left_top'>
            <ul>
              <li>Principal interest</li>
              <li>Property Taxes</li>
              <li>HOA Dues</li>
              <li>Homeowners</li>
            </ul>
            <hr/>
          </div>
          <div className='v-calc-left_bottom'>
            <span>
              Down Payment
            </span>
            <input
              type="text"
              value={data3}
              onChange={() => {
              }}
            />
            <div>
              {percentOfRange}%
            </div>
            <input
              min='0'
              max='200'
              type="range"
              value={data2}
              onChange={(e) => {
                this.handleChange2(e)
              }}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;