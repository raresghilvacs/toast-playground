import React from "react";
import useWindowEvent from "../../hooks/useWindowEvent";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastsArray, setToastsArray] = React.useState([]);

  const handleEvent = React.useCallback((event) => {
    if (event.key === "Escape") {
      setToastsArray([]);
    }
  });

  const event = React.useMemo(() => "keydown", []);

  useWindowEvent(event, handleEvent);

  const dimsissToast = (id) => {
    const newToastsArray = toastsArray.filter((toast) => toast.id !== id);
    setToastsArray(newToastsArray);
  };

  const createToast = (message, variant) => {
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
