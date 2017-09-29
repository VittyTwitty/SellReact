import React, {Component} from 'react';
import ModalForm from "./components/ModalForm";
import ModalShadle from "./components/ModalShadle";

class Modals extends Component {
  st;
  constructor(props) {
    super(props);
    console.log('this.state', this.props.stateOfDialog);
  }

  onDialogClose() {
    this.props.push({
      stateOfDialog: !this.props.stateOfDialog
    })
  }

  render() {
    let itemId = this.props.itemId;

    let dialogWindow;
    switch (itemId) {
      case 'scheduleShowing-1':
        dialogWindow = <ModalForm/>;
        break;
      case 'scheduleShowing-2':
        dialogWindow = <ModalShadle/>;
        break;
      default:
        return ''
    }

    return (
      <div>
        <div className='dialog-windows-wrapper'>
          <div
            className='dialog-windows_overflow'
            onClick={(e) => this.onDialogClose(e)}
          >
          </div>
          {dialogWindow}
        </div>
        {(this.st) ? <div>dsddddddddddddddddd</div> : ''}
      </div>


    )
  }
}

export default Modals;