import React from "react";
import styles from "./MenuLista.module.css";

const MenuLista = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <ul className={styles.navegacao}>{children}</ul>
    </nav>
  );
}

export default MenuLista;
