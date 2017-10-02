import React, {Component} from 'react';
import {connect} from "react-redux";
import * as usersAction from '../actions/index';
import {bindActionCreators} from "redux";
import UsersList from "../components/UsersList";
import FriendList from "./FriendList";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.usersAction.getAllUsers();
    }

    render() {

        console.log(this.props.users);
        return (
            <div>
                <UsersList
                    users={this.props.users.users}
                />
                <FriendList />
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