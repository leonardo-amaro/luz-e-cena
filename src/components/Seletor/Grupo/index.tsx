import React from "react";
import styles from "./Grupo.module.css";

interface GrupoProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icone?: React.ReactNode;
}

const Grupo = ({ icone, children, ...rest }: GrupoProps) => {
  return (
    <div className={styles.container}>
      {
        icone && <div className={styles.icone}>{icone}</div>
      }
      <select className={styles.seletor} {...rest}>
        {children}
      </select>
    </div>
  );
}

export default Grupo;