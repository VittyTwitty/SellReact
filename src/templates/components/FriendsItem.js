import React, {Component} from 'react';

class FriendsItem extends Component {
    render() {
        const {item, index} = this.props;
        return (
            <li key={index}>
                <div>{index + 1}</div>
                <div>{item.name.first}</div>
                <div>{item.name.last}</div>
                <div>{item.name.first}</div>
                <div>
                    <img src={item.picture.medium} alt=""/>
                </div>
            </li>
        )
    }
}

export default FriendsItem;