import React, {Component} from 'react';

class FriendsFilters extends Component {
    onCLickFriendsFilter(e) {
        let field = e.target.value;
        this.props.filterFriendsByName('name', field);
    }

    onChangeSearchBySurname() {
        this.props.searchFriendsBySurname(this.valueOfSearch.value)
        console.log(this.valueOfSearch.value)
    }

    render() {

        return (
            <div className='friends-filters'>
                <select name="filter-names" id="filter-names" onChange={(e) => this.onCLickFriendsFilter(e)}>
                    <option
                        value='first'
                    >Default
                    </option>
                    <option
                        value='first'
                    >Name
                    </option>
                    <option
                        value='last'
                    >Surname
                    </option>
                </select>
                <input
                    ref={(input) => this.valueOfSearch = input}
                    onChange={(e) => this.onChangeSearchBySurname(e)}
                    type="search"
                />
            </div>
        )
    }
}

export default FriendsFilters;