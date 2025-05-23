import type { Categoria, Censura } from "../../types";
import styles from "./Tag.module.css";
import classNames from "classnames";

interface TagProps {
  valor: Categoria | Censura;
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
}

const Tag = ({ valor }: TagProps) => {
  const classes = classNames(styles.tag, tagClasses[valor]);

  return (
    <span className={classes}>
      {valor}
    </span>
  );
}

export default Tag;
