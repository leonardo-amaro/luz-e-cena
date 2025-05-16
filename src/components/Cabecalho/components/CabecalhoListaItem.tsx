import React from "react";
import styles from "../Cabecalho.module.css";

const CabecalhoListaItem = ({
  children,
}: React.LiHTMLAttributes<HTMLLIElement>) => {
  return <li className={styles.menuitem}>{children}</li>;
}

export default CabecalhoListaItem;
