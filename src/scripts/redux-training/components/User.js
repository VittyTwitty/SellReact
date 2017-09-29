import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  onChangeNameOfUser(e) {
    this.props.changeUserName(this.inputValue.value);
    this.inputValue.value = '';
  }

  render() {
    const {
      name,
      userFlag
    } = this.props;

    return (
      <div>
        {
          userFlag ? <div>{name}</div> : ''
        }
        <input
          type="text"
          ref={input => this.inputValue = input}
        />
        <button
          onClick={this.onChangeNameOfUser.bind(this)}
        >
          Click no name change
        </button>
      </div>
    )
  }
}

User.PropTypes = {
  name: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired
};

export default User;