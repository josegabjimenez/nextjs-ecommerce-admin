import React from 'react';

const WarningAlert = ({ children, className }) => {
  return (
    <div className={`${className} alert alert-error shadow-lg p-0 px-2 w-full`}>
      <div>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default WarningAlert;
