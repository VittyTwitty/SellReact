import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalForm from "./ModalForm";
import ModalShadle from "./ModalShadle";
import TransitionGroup from 'react-addons-transition-group';

class ModalItem extends Component {
  render() {
    const {
      itemIdOfState,
      itemId
    } = this.props;
    let dialogInner;

    if (itemIdOfState === itemId) {
      switch (itemIdOfState) {
        case 'redux-modals-1':
          dialogInner = <ModalForm
            closeModalsToView={this.props.closeModalsToView}
          />;
          break;
        case 'redux-modals-2':
          dialogInner = <ModalShadle
            closeModalsToView={this.props.closeModalsToView}
          />;
          break;
        default:
          return null;
      }
    }
    return (
      <div>
        <TransitionGroup>{dialogInner}</TransitionGroup>
      </div>
    )
  }
}

ModalItem.propTypes = {
  itemIdOfState: PropTypes.string.isRequired,
  closeModalsToView: PropTypes.func.isRequired
};
export default ModalItem;