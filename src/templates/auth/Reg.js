import React, {Component} from 'react';
import axios from 'axios';


class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.inputChange = this.inputChange.bind(this);
    this.regSubmit = this.regSubmit.bind(this);
    this.apiBaseUrl = 'http://172.16.101.186/api/users/';
  }

  apiRequest() {
    let payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    axios.post(`${this.apiBaseUrl}`, payload)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  inputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })

  }

  regSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.apiRequest()
  }

  render() {
    return (
      <div>
        Logout
        <form
          onSubmit={this.regSubmit}
          className='logout-form'
        >
          <input
            name='username'
            value={this.state.username}
            onChange={this.inputChange}
            type="text"
            placeholder='Username'
          />
          <input
            name='email'
            value={this.state.email}
            onChange={this.inputChange}
            type="text"
            placeholder='Email'
          />
          <input
            name='password'
            value={this.state.password}
            onChange={this.inputChange}
            type="text"
            placeholder='Password'
          />
          <button type='submit'>Registration</button>
        </form>
      </div>
    )
  }
}

export default Reg;