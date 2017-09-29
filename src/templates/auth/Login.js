import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  loginSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        Login
        <form
          onSubmit={this.loginSubmit}
          className='login-form'
        >
          <input
            name='username'
            value={this.state.username}
            onChange={this.inputChange}
            type="text"
            placeholder='Username'
          />
          <input
            name='password'
            value={this.state.password}
            onChange={this.inputChange}
            type="text"
            placeholder='Password'
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;