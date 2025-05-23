import React from "react";
import styles from "./Fieldset.module.css";

type FieldsetProps = {
  variante?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ({ children, variante = "primary" }: FieldsetProps) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variante === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  );
}

export default Fieldset;
