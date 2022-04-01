import React, { useEffect, useRef } from 'react';

const Modal = ({ children, id, boxClassName, bgClassName, modal, setModal }) => {
  const modalCheckboxRef = useRef();

  // Handle modal close
  useEffect(() => {
    // It uncheck the checkbox to close the modal
    const handleCloseModal = () => {
      modalCheckboxRef.current.checked = false;
      setModal({ close: false });
    };
    if (modal?.close) {
      handleCloseModal();
    }
  }, [modal, setModal]);

  return (
    <>
      <input ref={modalCheckboxRef} type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className={`modal cursor-pointer  ${bgClassName}`}>
        <label className={`modal-box pt-8 px-6 relative ${boxClassName}`} htmlFor>
          <label htmlFor={id} className="btn btn-sm btn-circle btn-outline absolute right-2 top-2">
            ✕
          </label>
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
