import React from "react";
import styles from "../Cabecalho.module.css";

const CabecalhoLista = ({
  children,
}: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={styles.cabecalho}>{children}</ul>;
}

export default CabecalhoLista;
