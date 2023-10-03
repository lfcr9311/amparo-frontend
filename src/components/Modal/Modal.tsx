import './Modal.css';
import Close from '../../assets/Close.svg';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  isClose: any;
  reducted?: boolean;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  title,
  isClose,
  children,
  reducted,
}: ModalProps) {
  if (isOpen) {
    return (
      <div className="background-container">
        <div
          className={reducted ? 'modal-container-reducted' : 'modal-container'}
        >
          <div className="header-modal-container">
            <p className="title-modal">{title}</p>
            <button className="button-close" onClick={isClose}>
              <img src={Close} />
            </button>
          </div>
          <div className="body-modal-container">{children}</div>
        </div>
      </div>
    );
  }
}
