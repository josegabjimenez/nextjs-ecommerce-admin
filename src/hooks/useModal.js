import { useState } from 'react';

const useModal = () => {
  const defaultModal = {
    close: false,
  };
  const [modal, setModal] = useState(defaultModal);

  return { modal, setModal };
};

export default useModal;
