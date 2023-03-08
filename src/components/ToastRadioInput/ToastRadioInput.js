import React from "react";
import ToastInput from "../ToastInput/ToastInput";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastRadioInput({ className = "", selectedVariant, onChange }) {
  return (
    <div className={className}>
      {VARIANT_OPTIONS.map((option) => {
        return (
          <ToastInput
            key={option}
            type="radio"
            id={`variant-${option}`}
            labelValue={option}
            value={option}
            checked={selectedVariant === option}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}

export default ToastRadioInput;
