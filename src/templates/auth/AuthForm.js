import React, {Component} from 'react';
import Login from "./Login";
import Reg from "./Reg";

class AuthForm extends Component {
  render() {
    console.log('AUTH');
    return (
      <div>
        <Login></Login>
        <Reg></Reg>
      </div>
    )
  }
}

export default AuthForm;