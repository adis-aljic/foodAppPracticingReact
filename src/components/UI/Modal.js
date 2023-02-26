import classes from './Modal.module.css';
import createPortal from 'react-dom';

const portalDestionation = document.getElementById('overlays');

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOVerlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  <>
    {createPortal(<Backdrop />, portalDestionation)}
    {createPortal(
      <ModalOVerlay>{props.children}</ModalOVerlay>,
      portalDestionation
    )}
  </>;
};

export default Modal;
