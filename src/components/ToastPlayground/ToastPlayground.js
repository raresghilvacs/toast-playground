import React from "react";

import Button from "../Button";
import ToastTextarea from "../ToastTextarea/ToastTextarea";
import ToastRadioInput, {
  VARIANT_OPTIONS,
} from "../ToastRadioInput/ToastRadioInput";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
  const [textareaValue, setTextareaValue] = React.useState("");
  const [inputVariant, setInputVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastsArray, setToastsArray] = React.useState([]);

  const handleDimsissToast = (id) => {
    const newToastsArray = toastsArray.filter((toast) => toast.id !== id);
    setToastsArray(newToastsArray);
  };

  const handleAddToast = (e) => {
    e.preventDefault();
    const newToastsArray = [
      ...toastsArray,
      {
        id: crypto.randomUUID(),
        variant: inputVariant,
        message: textareaValue,
      },
    ];
    setToastsArray(newToastsArray);
    setInputVariant(VARIANT_OPTIONS[0]);
    setTextareaValue("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form onSubmit={(e) => handleAddToast(e)}>
        {toastsArray.length > 0 && (
          <ToastShelf toasts={toastsArray} onDismiss={handleDimsissToast} />
        )}

        <div className={styles.controlsWrapper}>
          <ToastTextarea
            className={styles.row}
            labelValue="Message"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <ToastRadioInput
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              selectedVariant={inputVariant}
              onChange={(e) => setInputVariant(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
