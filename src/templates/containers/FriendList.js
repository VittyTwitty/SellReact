import React, {Component} from 'react';
import UsersItem from "../components/UsersItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as usersAction from '../actions/index';


class FriendList extends Component {
    componentDidMount() {
        const id = this.props.match.params.number;
        this.props.usersAction.addToFriends(id);
    }
    render() {
        const {friends} = this.props;
        return (
            <ul className='friends-list'>
                {
                    friends ? friends.map((item, index) =>
                       <li>ddddddd</li>
                    ) : 'No Friends'
                }
            </ul>

        )
    }
}
const mapStateToProps = state => ({
    users: state.users,
    id: state.index
});

const mapDispatchToProps = dispatch => ({
    usersAction: bindActionCreators(usersAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);