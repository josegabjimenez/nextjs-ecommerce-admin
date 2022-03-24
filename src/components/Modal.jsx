import React from 'react';

const Modal = ({ children, id, boxClassName, bgClassName }) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle " />
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
