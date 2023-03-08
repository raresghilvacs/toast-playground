import React from "react";

import Button from "../Button";
import ToastTextarea from "../ToastTextarea/ToastTextarea";
import ToastRadioInputForm from "../ToastRadioInputForm/ToastRadioInputForm";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [textareaValue, setTextareaValue] = React.useState("");
  const [inputVariant, setInputVariant] = React.useState();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <ToastTextarea
          className={styles.row}
          labelValue="Message"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        />

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <ToastRadioInputForm
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            checked={inputVariant}
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
    </div>
  );
}

export default ToastPlayground;
