import type { Filme } from "../../types";
import CardFilme from "../CardFilme";
import styles from "./ListaFilmes.module.css";

interface ListaFilmesProps {
  filmes: Filme[];
}

const ListaFilmes = ({ filmes }: ListaFilmesProps) => {
  return (
    <ul className={styles.lista}>
      {filmes.map((filme) => <CardFilme key={filme.id} {...filme} />)}
    </ul>
  );
}

export default ListaFilmes;
