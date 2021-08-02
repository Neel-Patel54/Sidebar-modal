import React from 'react';
import { useGlobalContext } from './Context';
import CloseIcon from '@material-ui/icons/Close';

const Modal = () => {

    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <h3>modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};
 
export default Modal;