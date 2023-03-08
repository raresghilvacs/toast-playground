import React from "react";

const useWindowEvent = (eventType, callback) => {
  React.useEffect(() => {
    window.addEventListener(eventType, callback);

    return () => {
      window.removeEventListener(eventType, callback);
    };
  }, []);
};

export default useWindowEvent;
