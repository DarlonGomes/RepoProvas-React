import React, { createContext, useState } from "react";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const [method, setMethod] = useState("");
  const removeLocal = () => {
    localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE);
  };
  return (
    <HandlerContext.Provider
      value={{
        isOpen,
        setIsOpen,
        logout,
        setLogout,
        removeLocal,
        method,
        setMethod,
      }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;
