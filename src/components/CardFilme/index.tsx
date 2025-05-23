import styles from "./CardFilme.module.css";
import Tag from "../Tag";

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface CardFilmeProps {
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: Categoria;
  duracao: number;
  censura: Censura;
}

const CardFilme = ({
  src,
  alt,
  titulo,
  genero,
  categoria,
  duracao,
  censura
}: CardFilmeProps) => {
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
