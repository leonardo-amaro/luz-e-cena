import React from "react";
import classNames from "classnames";
import styles from "./Botao.module.css";

type BotaoProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Botao = ({ children, variant = "default", ...rest }: BotaoProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon,
  }

  return (
    <button className={classNames(styles.botao, classMap[variant])} {...rest}>
      {children}
    </button>
  );
}

export default Botao;