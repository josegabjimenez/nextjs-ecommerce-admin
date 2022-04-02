import React from 'react';

const Alert = ({ alert, handleClose }) => {
  // It auto close the alert after 10 seconds
  if (alert?.active && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 10000);
  }

  return (
    <>
      {alert?.active && (
        <div className={`alert alert-${alert.type} shadow-lg w-1/3 fixed z-[1000] right-5 bottom-5`}>
          <div>
            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" className="stroke-current cursor-pointer flex-shrink-0 h-6 w-6 hover:opacity-80" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{alert?.message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
