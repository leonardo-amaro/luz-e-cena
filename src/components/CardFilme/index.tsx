import styles from "./CardFilme.module.css";
import Tag from "../Tag";
import type { Filme } from "../../types";

const CardFilme = ({
  src,
  alt,
  titulo,
  genero,
  categoria,
  duracao,
  censura
}: Filme) => {
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag valor={categoria} />
          </div>
          <div>
            <p>{duracao}</p>
            <Tag valor={censura} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardFilme;
