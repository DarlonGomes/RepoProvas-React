import React, { createContext, useState } from "react";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [method, setMethod] = useState("");
  const [refresh, setRefresh] = useState(false);
  const removeLocal = () => {
    localStorage.setItem("repoprovas_user_config", "");
  };
  return (
    <HandlerContext.Provider
      value={{
        isAlertOpen,
        setIsAlertOpen,
        removeLocal,
        method,
        setMethod,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;
