import React, {Component} from 'react';
import {connect} from "react-redux";
import FriendsItem from "../components/FriendsItem";
import FriendsFilters from "../components/FriendsFilters";
import * as actionFilters from '../actions/index';
import {bindActionCreators} from "redux";


class FriendList extends Component {

    render() {
        const {friends} = this.props.users;
        const {searchedFriends} = this.props.search;
        const {filterFriendsByName, searchFriendsBySurname} = this.props.actionFilters;
        return (
            <ul className='friends-list'>
                <FriendsFilters
                    filterFriendsByName={filterFriendsByName}
                    searchFriendsBySurname={searchFriendsBySurname}
                />
                {
                    !searchedFriends ?
                        <div>
                            {
                                friends.length ? friends.map((item, index) =>
                                    <FriendsItem
                                        key={index}
                                        item={item}
                                        index={index}
                                    />
                                ) : 'No Friends'
                            }
                        </div> :
                        <div>
                            {
                                searchedFriends.map((item, index) =>
                                    <FriendsItem
                                        key={index}
                                        item={item}
                                        index={index}
                                    />
                                )
                            }
                        </div>

                }

            </ul>

        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    search: state.search
});
const mapDispatchToProps = dispatch => ({
    actionFilters: bindActionCreators(actionFilters, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);