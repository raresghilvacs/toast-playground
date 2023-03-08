import React from "react";

function ToastInput({ id, labelValue, ...delegated }) {
  return (
    <label htmlFor={id}>
      <input id={id} {...delegated} />
      {labelValue}
    </label>
  );
}

export default ToastInput;
