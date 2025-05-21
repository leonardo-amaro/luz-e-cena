import React from "react";
import styles from "./InputTexto.module.css";

const InputTexto = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...props} />
  );
}

export default InputTexto;
