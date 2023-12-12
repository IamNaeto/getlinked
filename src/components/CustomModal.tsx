// components/Modal.tsx
import React from 'react';
import Modal from 'react-modal';
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children}) => {
  const customStyles: Modal.Styles = {
    overlay: {
      backgroundColor: 'rgba(21, 14, 40, 0.93)',
      zIndex: 1000,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #D434FE',
      background: 'transparent',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      maxWidth: '500px',
      width: '80%',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
        <div>{children}</div>
    </Modal>
  );
};

export default CustomModal;
