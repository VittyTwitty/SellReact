import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as usersAction from '../actions/index';


class UserDetails extends Component {
    componentDidMount() {
        const id = this.props.match.params.number;
        this.props.usersAction.getOneUser(id);
    }

    render() {
        const {currencyUser} = this.props.users;
        console.log(this.props);
        return (
            <div className='users-item'>
                <Link to='/'>Back</Link>
                {
                    currencyUser ? <div>
                        <div className="users-item_img-wrp">
                            <img src={currencyUser.picture.thumbnail} alt=""/>
                        </div>
                        <div>
                            {currencyUser.name.first}
                        </div>
                        <div>
                            {currencyUser.name.last}
                        </div>
                        <div>
                            {currencyUser.phone}
                        </div>
                    </div> : null
                }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);