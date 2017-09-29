import React, {Component} from 'react';
import {TweenMax} from "gsap";

class ModalShadle extends Component {

  componentWillAppear(callback) {
    this.changeElementsWhenTransition(callback, 0, .3, 0, 1)
  }

  componentWillEnter(callback) {
    this.changeElementsWhenTransition(callback, 0, .3, 0, 1);
  }

  componentWillLeave(callback) {
    this.changeElementsWhenTransition(callback, .3, 0, 1, 0);
  }

  changeElementsWhenTransition(callback, opacityInOverlay, opacityOutOverlay, opacityInBody, opacityOutBody) {
    const elOverlay = this.containerOverlay;
    const elBody = this.contaierBody;
    TweenMax.fromTo(elOverlay, 0.3, {opacity: opacityInOverlay}, {opacity: opacityOutOverlay, onComplete: callback});
    TweenMax.fromTo(elBody, 0.3, {opacity: opacityInBody}, {opacity: opacityOutBody, onComplete: callback});

  }

  onCloseOnOverlay(e) {
    this.props.closeModalsToView();
  }

  render() {
    return (
      <div className='modal-shadle'>
        <div
          ref={c => this.containerOverlay = c}
          id='modal-shadle_overlay'
          onClick={(e) => this.onCloseOnOverlay(e)}
        >
        </div>
        <div
          ref={com => this.contaierBody = com}
          className='modal-shadle_body'
        >
          <div className="modal-shadle_body-head">
            <button
              onClick={(e) => this.onCloseOnOverlay(e)}
            >x
            </button>
          </div>

          <div className="modal-shadle_body-content">
            MODAL2sdsdsdsdsds
            dsds
            dsd
            sddddddddddd

            ddsdsdsdsdsdsd231
          </div>


        </div>

      </div>
    )
  }
}

export default ModalShadle;