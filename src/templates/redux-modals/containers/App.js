import React, {Component} from 'react';
import ModalItem from "../components/ModalItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as modalActions from '../actions/ModalsActions'
import ButtonShow from "../components/ButtonShow";

class App extends Component {
  render() {

    const {
      isOpenModal
    } = this.props.modals;
    const {
      itemIdOfState
    } = this.props;
    const {
      addModalsToView,
      closeModalsToView
    } = this.props.modalActions;

    const {
      itemId
    } = this.props;
    return (
      <div>
        <ButtonShow
          itemId={itemId}
          addModalsToView={addModalsToView}
          isOpenModal={isOpenModal}
        />
        {
          isOpenModal ? <ModalItem
            closeModalsToView={closeModalsToView}
            itemId={itemId}
            itemIdOfState={itemIdOfState}
          /> : ''
        }

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    modals: state.modals,
    itemIdOfState: state.modals.itemId,
    itemId: ownProps.itemId,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);