import React, {Component} from 'react';
import {connect} from "react-redux";
import * as usersAction from '../actions/index';
import {bindActionCreators} from "redux";
import UsersItem from "../components/UsersItem";

class UsersContainer extends Component {
	componentDidMount() {
		this.props.usersAction.getAllUsers();
	}

	render() {
		const {users} = this.props.users;
		console.log('users', users);
		return (
			<div>
				{
					users ? users.map((item, index) =>
						<UsersItem
							key={index}
							users={this.props.users}
						/>) : <div>Empty</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users
});

const mapDispatchToProps = dispatch => ({
	usersAction: bindActionCreators(usersAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);