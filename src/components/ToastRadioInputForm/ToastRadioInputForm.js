import React from "react";
import ToastInput from "../ToastInput/ToastInput";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastRadioInputForm({ className = "", checked, onChange }) {
  return (
    <form className={className}>
      {VARIANT_OPTIONS.map((option) => {
        return (
          <ToastInput
            key={option}
            type="radio"
            id={`variant-${option}`}
            labelValue={option}
            value={option}
            checked={checked === option}
            onChange={onChange}
          />
        );
      })}
    </form>
  );
}

export default ToastRadioInputForm;
