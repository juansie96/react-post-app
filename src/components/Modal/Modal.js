import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

const Modal = ({children, toggleModal}) => {

    return ReactDOM.createPortal(
        <>
        <div className="backdrop" onClick={() => toggleModal()}></div>
        <div className="modal">
            {children}
        </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal
