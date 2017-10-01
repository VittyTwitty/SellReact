import {Component} from "react/lib/ReactBaseClasses";
import {connect} from "react-redux";
import React from 'react';
import {bindActionCreators} from "redux";
import * as usersAction from '../actions/index'
import UsersContainer from "./UsersContainer";

class App extends Component {
  render() {
    return (
      <UsersContainer/>
    )
  }
}

export default App;