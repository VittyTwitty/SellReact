import React, {Component} from 'react';

class ModalForm extends Component {
  onCloseOnOverlay(e) {
    this.props.closeModalsToView();
  }

  render() {
    return (
      <div className='modal-form'>
        <div
          id='modal-form_overlay'
          onClick={(e) => this.onCloseOnOverlay(e)}
        >
        </div>
        <div className='modal-form_body'>
          <div>
            <button
              onClick={(e) => this.onCloseOnOverlay(e)}
            >
              x
            </button>
          </div>
          modal 1
          modal 1
          modal 1
          modal 1
          modal 1
          modal 1
          modal 1
        </div>

      </div>
    )
  }
}

export default ModalForm;