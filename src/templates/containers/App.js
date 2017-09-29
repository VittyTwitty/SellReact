import React, {Component} from 'react';
import {connect} from "react-redux";
import * as peoplesActions from '../actions/index'
import {bindActionCreators} from "redux";

class App extends Component {
    componentWillMount() {
        this.props.peoplesActions.getPeoples();
    }

    render() {

        return (
            <div>
                {

                }
                <div className="products">
                    <div className="product">
                        <a href="#" className="preview">
                            <div>
                                <img src="../../assets/img/1.jpg" className="img-responsive"/>
                            </div>
                            <p>+ Quick View</p>
                        </a>
                        <div className="details">
                            <a href="#" className="preview name">Turbo Incredible Product Name</a>
                            <p className="from">From People Making Things</p>
                        </div>
                        <div className="pricing">
                            <label className="price member">Member Cost: <b>$33.50</b></label>
                            <label className="price msrp">MSRP: <b>$43.50</b></label>
                        </div>
                        <a href="#" className="preview button primary add added" data-prodcode="1492">Add</a>
                    </div>

                    <div className="product">
                        <a href="#" className="preview">
                            <div>
                                <img src="../../assets/img/2.jpg" className="img-responsive"/>
                            </div>
                            <p>+ Quick View</p>
                        </a>
                        <div className="details">
                            <a href="#" className="preview name">Turbo Incredible Product Name</a>
                            <p className="from">From People Making Things</p>
                        </div>
                        <div className="pricing">
                            <label className="price member">Member Cost: <b>$33.50</b></label>
                            <label className="price msrp">MSRP: <b>$43.50</b></label>
                        </div>
                        <a href="#" className="preview button primary add" data-prodcode="1776">Add</a>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        peoples: state.peoples
    }
}

function mapDispatchToProps(dispatch) {
    return {
        peoplesActions: bindActionCreators(peoplesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);