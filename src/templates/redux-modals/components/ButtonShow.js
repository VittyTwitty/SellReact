import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonShow extends Component {
  onOpenOneModal(e) {
    this.props.addModalsToView(this.props.itemId);
  }
  render() {

    const {
      itemId
    } = this.props;
    let buttonName;

    switch (itemId) {
      case 'redux-modals-1':
        buttonName = 'Кнопка 1';
        break;
      case 'redux-modals-2':
        buttonName = 'Кнопка 2';
        break;
      default:
        buttonName = null
    }



    return (
      <button
        onClick={this.onOpenOneModal.bind(this)}
      >{buttonName}</button>
    )
  }
}

ButtonShow.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  addModalsToView: PropTypes.func.isRequired,

};
export default ButtonShow;