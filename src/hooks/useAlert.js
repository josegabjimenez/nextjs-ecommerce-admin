import { useState } from 'react';

const useAlert = () => {
  const defaultAlert = {
    active: false,
    message: '',
    type: 'success',
    autoClose: true,
  };

  const [alert, setAlert] = useState(defaultAlert);

  const toggleAlert = () => {
    setAlert({ ...alert, active: !alert.active });
  };

  return { alert, setAlert, toggleAlert };
};

export default useAlert;
