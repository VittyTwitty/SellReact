import React, {Component} from 'react';
import UsersItem from "./UsersItem";


class UsersList extends Component {
    render() {
        const {users} = this.props;
        return (
            <ul className='users-list'>
                {
                    users ? users.map((item, index) =>
                        <UsersItem
                            key={index}
                            index={index}
                            user={item}
                            id={item.login.md5}
                        />
                    ) : ''
                }
            </ul>

        )
    }
}

export default UsersList;