import React from "react";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notification"
    >
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              onDismiss={() => onDismiss(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
