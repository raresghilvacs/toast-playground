import React from "react";

const useWindowEvent = (eventType, handleOnKeyDown) => {
  React.useEffect(() => {
    window.addEventListener(eventType, handleOnKeyDown);

    return () => {
      window.removeEventListener(eventType, handleOnKeyDown);
    };
  }, []);
};

export default useWindowEvent;
