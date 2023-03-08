import React from "react";
import { VARIANT_OPTIONS } from "../ToastRadioInput/ToastRadioInput";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastsArray, setToastsArray] = React.useState([]);

  const dimsissToast = (id) => {
    console.log("here");
    const newToastsArray = toastsArray.filter((toast) => toast.id !== id);
    setToastsArray(newToastsArray);
  };

  const createToast = (message, variant) => {
    console.log(message, variant);
    console.log(toastsArray);
    const newToastsArray = [
      ...toastsArray,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ];
    setToastsArray(newToastsArray);
  };

  return (
    <ToastContext.Provider
      value={{
        toastsArray,
        createToast,
        dimsissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
