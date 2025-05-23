import CardFilme from "../CardFilme";
import styles from "./ListaFilmes.module.css";

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface Filme {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: Categoria;
  duracao: number;
  censura: Censura;
}

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
