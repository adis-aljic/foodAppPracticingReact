import classes from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOVerlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('overlays')
      )}
      {createPortal(
        <ModalOVerlay>{props.children}</ModalOVerlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
