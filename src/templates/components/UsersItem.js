import React, {Component} from 'react';

import {Link} from "react-router-dom";

class UsersItem extends Component {
    onAddFriend(e) {
        e.preventDefault();
        console.log('sdsdsdsd')
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

export default UsersItem;