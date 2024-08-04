// import React from "react";
// const ModalContext = React.createContext({});

// export default ModalContext;

import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
  });

  const openModal = (data) => {
    setModalState({
      isOpen: true,
      data,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      data: null,
    });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
export default ModalContext

