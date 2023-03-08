import React from "react";
import styles from "./ToastTextarea.module.css";

function ToastTextarea({ className = "", labelValue, ...delegated }) {
  return (
    <div className={className}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {labelValue}
      </label>
      <div className={styles.inputWrapper}>
        <textarea id="message" className={styles.messageInput} {...delegated} />
      </div>
    </div>
  );
}

export default ToastTextarea;
