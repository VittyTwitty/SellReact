import React, {Component} from 'react';

import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as usersAction from '../actions/index';

class UsersItem extends Component {
    onAddFriend(e) {
        e.preventDefault();
        this.props.usersAction.addToFriends(this.props.id)
    }
    render() {
        const {user, index, id} = this.props;
        return (
            <li className='users-item'>
                <Link to={`/detail/${id}`} replace>
                    <div className="users-item_img-wrp">
                        <img src={user.picture.thumbnail} alt=""/>
                    </div>
                    <div>
                        {user.name.first}
                    </div>
                    <div>
                        {user.name.last}
                    </div>
                    <div>
                        {user.phone}
                    </div>
                    <div
                        onClick={(e) => this.onAddFriend(e)}
                        className='invite-friend'>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>

                </Link>
            </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersItem);