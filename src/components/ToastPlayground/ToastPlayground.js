import React from "react";

import Button from "../Button";
import ToastTextarea from "../ToastTextarea/ToastTextarea";
import ToastRadioInput, {
  VARIANT_OPTIONS,
} from "../ToastRadioInput/ToastRadioInput";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
  const [textareaValue, setTextareaValue] = React.useState("");
  const [inputVariant, setInputVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toastsArray, createToast, dimsissToast } =
    React.useContext(ToastContext);

  const handleAddToast = (e) => {
    e.preventDefault();
    createToast(textareaValue, inputVariant);
    setInputVariant(VARIANT_OPTIONS[0]);
    setTextareaValue("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div>
        {toastsArray.length > 0 && (
          <ToastShelf toasts={toastsArray} onDismiss={dimsissToast} />
        )}

        <form onSubmit={handleAddToast} className={styles.controlsWrapper}>
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
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
